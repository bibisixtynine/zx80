export default function handler(request, response) {
    response.status('200').json({
      body: "so nice",//request.body,
      query: "hello wold",//request.query,
      cookies: "so tasty",//request.cookies,
    });
  }