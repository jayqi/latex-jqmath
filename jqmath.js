MathJax.Hub.Config({
  TeX: {
    Macros: {
	  paren: ["\\\\left( #1 \\\\right)",1],
	  sbrack: ["\\\\left[ #1 \\\\right]",1],
	  cbrack: ["\\\\left\\\\{ #1 \\\\right\\\\}",1],
	  abrack: ["\\\\langle #1 \\\\rangle",1],
	  evalat: ["\\\\left. #1 \\\\right\\\\vert_{#2}",2],
	  deriv: ["\\\\frac{d#1}{d#2}",2],
	  pderiv: ["\\\\frac{\\\\partial#1}{\\\\partial#2}",2],
	  abs: ["\\\\lvert #1 \\\\rvert",1],
	  norm: ["\\\\lVert #1 \\\\rVert",1],
	  inner: ["\\\\langle #1 \\\\rangle",1],
	  realset: "{\\\\mathbb{R}}",
	  complexset: "{\\\\mathbb{C}}",
	  integerset: "{\\\\mathbb{Z}}",
	  rationalset: "{\\\\mathbb{Q}}"
	  by: "{\\\\times}",
	  del: "{\\\\nabla}",
    }
  }
});