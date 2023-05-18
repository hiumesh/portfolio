interface MarkdownPreviewPropTypes {
  markdownHtml: string | TrustedHTML;
}

export default function MarkdownPreview({ markdownHtml }: MarkdownPreviewPropTypes) {

  return (
    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: markdownHtml }}>
    </div>
  );
};