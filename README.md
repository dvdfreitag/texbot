# texbot

[![Build Status](https://travis-ci.org/dvdfreitag/texbot.svg?branch=master)](https://travis-ci.org/dvdfreitag/texbot)
[![npm version](https://badge.fury.io/js/texbot.svg)](https://badge.fury.io/js/texbot)

<img src="https://github.com/dvdfreitag/texbot/blob/master/tex.png" width="256">

Texbot is a Slack bot that generates LaTeX rendered images using the [QuickLaTeX](http://quicklatex.com/) site. 

## Usage
Once invited to a room, texbot listens for the command `!tex`. For example, the following command:

```latex
!tex \begin{eqnarray}
 y &=& x^4 + 4      \nonumber \\
   &=& (x^2+2)^2 -4x^2 \nonumber \\
   &\le&(x^2+2)^2
\end{eqnarray}
```

Produces the following render:

![Equation](http://quicklatex.com/cache3/5e/ql_24e263eeb603f1273759abfbaaf2bb5e_l3.png)

### Docker image
To run this as an Docker image simply type:
```bash
docker build -t texbot/texbot:latest
docker run -d -p 8080:8080 tex/texbot
```

## Token
In order for texbot to function properly, you must first add a bot to the list of custom configurations. Once you have a bot, you must replace `<token>` in `bin/texbot.js` with the API Token for that bot. 

**Please note**: Be careful when using GitHub and API Tokens. These are sensitive values that should not be pushed to public repositories. If you plan to use texbot in a repository you should use the `fs` npm module and store this token in a file that does not get pushed to the public repository.

## Packages
texbot includes the following LaTeX packages by default:
- amsmath
- amsfonts
- amssymb
- graphicx
- mhchem

But you can easily change which packages are included by editing the `preamble` inside of `bin/texbot.js`. Keep in mind that QuickLaTeX does not support all packages.


Credit for the LaTeX icon goes to [kafi2007](http://kafi2007.deviantart.com/) on Deviant Art :smile:
