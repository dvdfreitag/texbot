var slackbot = require('slackbots');
var request = require('request');
var url = 'https://quicklatex.com/latex3.f/'

var settings = {
	token: '<token>',
	name: 'texbot'
}

var bot = new slackbot(settings);

bot.on('message', function(data) {
	if (data.type === 'message') {
		if (data.text === undefined) return;

		var text = data.text.replace('!tex ', '').replace(new RegExp('amp;', 'g'), '');

		if (data.text.startsWith('!tex')) {
			request({
				url: 'http://quicklatex.com/latex3.f/',
				method: 'post',
				form: {
					formula: text,
					fsize: '20px', 
					fcolor: '000000', 
					mode: '0',
					out: '1',
					remhost: 'quicklatex.com', 
					preamble: '\\usepackage{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{graphicx} \\usepackage{mhchem}',
					errors: '1'
				}
			}, function(error, response, body) {
				if (error) {
					console.log(error);
				}
				else
				{
					var image = body.split('\n')[1].split(' ')[0];

					var params = {
						as_user: true,
						unfurl_media: true,
						attachments: [{
							color: "#36a64f",
							fallback: "quicklatex.com",
							footer: "quicklatex.com",
							image_url: image
						}]
					}

					bot.postMessage(data.channel, "", params);
				}
			});
		}
	}
});
