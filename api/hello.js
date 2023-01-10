export const config = {
    runtime: 'edge', // this is a pre-requisite
    regions: ['cdg1'], // only execute this function on cdg1
};

export default (req) => {
    return new Response(`Hello, from ${req.url} I'm now an Edge Function!`);
};