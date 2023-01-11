// this is an edge function
//
// it's a serverless function that runs on the edge (faster, but more limited)
//
// you can read more about edge functions here: https://vercel.com/docs/concepts/functions/edge-functions
//
// -> to test this api you can browse https://WEBSITE_URL/api/hello
//
// -> during dev, use terminal command: vercel dev
// (you can't access the api with terminal command : vite dev)
//
// => your will need vercel cli installed: https://vercel.com/download
//

export const config = {
    runtime: 'edge', // this is a pre-requisite
    regions: ['cdg1'], // only execute this function on cdg1
};


export default (req) => {
    debugger
    return new Response(`
    ADD BRANCHE FROM PRNEW
    🤩 Hello from ${req.url} modified with prnew then vscode !
    🔥 I'm now an Edge Function!
    🔐 I can use the secret key: ${process.env.SECRET_KEY}

    💫😎🚀
    `);
};