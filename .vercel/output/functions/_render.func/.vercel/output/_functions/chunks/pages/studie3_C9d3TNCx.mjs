/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"CERTIFICADO PROFESIONAL Desarrollo de aplicaciones con tecnologia web","location":"Gijón","url":"http://ni.sb/mehanad","institute":"Asata","date":2021,"tags":["C#","HTML","CSS","Javascript",".Net"]};
				const file = "C:/Users/saulo/OneDrive/Documentos/Saul CV Web/src/pages/studies/studie3.md";
				const url = "/studies/studie3";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
