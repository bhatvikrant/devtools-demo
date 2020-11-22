// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.statusCode = 200;
	res.json({ status: 200, message: "This request was a success!" });
};