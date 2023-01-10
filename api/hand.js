// this is a serverless function
//
// you can read more about serverless functions here: https://vercel.com/docs/serverless-functions/introduction
//
// -> to test this api you can browse https://WEBSITE_URL/api/hand
//
// -> during dev, use terminal command: vercel dev
// (you can't access the api with terminal command : vite dev)
//
// => your will need vercel cli installed: https://vercel.com/download

export default function handler(request, response) {
    response.status('200').json({
      body: "so nice",//request.body,
      query: "hello wold",//request.query,
      cookies: "so tasty",//request.cookies,
      secret: `${process.env.SECRET_KEY}`
    });
  }