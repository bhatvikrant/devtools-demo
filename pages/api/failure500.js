// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.statusCode = 500;
	res.json({
		status: 500,
		step_1_message: "Oops, request was a failure!",
		step_2_what_should_i_do_now:
			"Take a screenshot of this section (Preview) immediately",
		step_3_explanation:
			"Since this is a 5XX status code, then it is probably a backend issue, I must tell the backend team.",
	});
};

// someKey: {
// 			someAnotherKey: {
// 				abcd: "1273612",
// 				efgh: "2374y324",
// 				someData: "datdatadta",
// 				data: {
// 					message: "Oops, request was a failure!",
// 				},
// 			},
// 		},
