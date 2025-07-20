export const config = {
  runtime: 'edge',
};

const token = '678934e1-3b3c-4a82-86e7-b7668c0afc6d';
const configId = 'ecfg_4hzwa8qwqvzg4qlcdyq8fpxwieb1';

export default async function handler(req) {
  if (req.method === 'GET') {
    const response = await fetch(`https://api.vercel.com/v1/edge-config/${configId}/item/status`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'خواندن مقدار ناموفق بود' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify({ status: data.value }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (req.method === 'POST') {
    const body = await req.json();
    const mood = body.status || '😍';

    const updateResponse = await fetch(`https://api.vercel.com/v1/edge-config/${configId}/items`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'update',
            key: 'status',
            value: mood
          }
        ]
      })
    });

    if (!updateResponse.ok) {
      const errText = await updateResponse.text();
      return new Response(JSON.stringify({ error: errText }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ status: mood }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response('Method Not Allowed', { status: 405 });
}
