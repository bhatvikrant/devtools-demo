// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.statusCode = 400;
	res.json({
		status: 400,
		step_1_message: "Oops, request was a failure!",
		step_2_what_should_i_do_now:
			"Take a screenshot of this section (Preview) immediately",
		step_3_explanation:
			"Since this is a 4XX status code, then it is probably a frontend issue, I must tell the frontend team.",
	});
};
