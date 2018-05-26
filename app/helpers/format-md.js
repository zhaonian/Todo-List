import { htmlSafe } from '@ember/template';
import { helper as buildHelper } from '@ember/component/helper';

export function formatMarkdown(params) {
        return htmlSafe(new showdown.Converter().makeHtml(params[0]))
}

export default buildHelper(formatMarkdown);
