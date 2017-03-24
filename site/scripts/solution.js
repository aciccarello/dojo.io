var Prism = require('prismjs');
var _ = require('lodash');

hexo.extend.tag.register('solution', ([name], text) => {
	//const content = hexo.render.renderSync({ text, engine: 'markdown' });
	lang = 'javascript';
	text = text.replace(/^```.*$/gm, '');
	text = text.replace(/s*/,"");
	var content = Prism.highlight(text, Prism.languages[lang]);
	
	return `<button class="toggle-solution" data-target="${name}">Toggle Solution</button>
		<section id="${name}" class="hidden"><pre class="language-${lang}"><code>${content}</code></pre></section>`;
}, { ends: true });