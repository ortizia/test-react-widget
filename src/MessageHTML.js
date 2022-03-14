import format from 'date-fns/format';
import markdownIt from 'markdown-it';
import markdownItSup from 'markdown-it-sup';
import markdownItClass from '@toycode/markdown-it-class';
import markdownItLinkAttributes from 'markdown-it-link-attributes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MessageHTML({ message }) {
  const sanitizedHTML = markdownIt({ break: true, html: true })
    .use(markdownItClass, {
      img: ['tcw-message-img']
    })
    .use(markdownItSup)
    .use(markdownItLinkAttributes, { attrs: { target: '_blank', rel: 'noopener' } })
    .render(message);

  return (
    <div className="tcw-message-response">
      <div className="tcw-message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML.replace(/\n$/,'') }} />
      <span className="tcw-timestamp">{format(new Date(), 'hh:mm')}</span>
    </div>
  );
}

export default MessageHTML;