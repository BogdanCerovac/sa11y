
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 3.0.5
  * @author Adam Chaboryk, Toronto Metropolitan University
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2023 Toronto Metropolitan University (formerly Ryerson University).
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
/*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
var ja = {
  // Japan
  strings: {
    LANG_CODE: 'ja',
    MAIN_TOGGLE_LABEL: 'アクセシビリティの確認',
    CONTAINER_LABEL: 'アクセシビリティチェッカー',
    ERROR: 'エラー',
    ERRORS: 'エラース',
    WARNING: '警告',
    WARNINGS: '注意事項',
    GOOD: '良い',
    ON: 'オン',
    OFF: 'オフ',
    ALERT_TEXT: 'アラート',
    ALERT_CLOSE: '閉じる',
    OUTLINE: 'ページ概要',
    PAGE_ISSUES: 'ページの問題',
    SETTINGS: '設定方法',
    CONTRAST: 'コントラスト',
    FORM_LABELS: 'フォームラベル',
    LINKS_ADVANCED: 'リンク集（上級者向け）',
    DARK_MODE: 'ダークモード',
    SHORTCUT_SCREEN_READER: '問題にスキップします。キーボードショートカットAlt S',
    SHORTCUT_TOOLTIP: '発行物へスキップ',
    NEW_TAB: '新しいタブを開く',
    PANEL_HEADING: 'アクセシビリティチェック',
    PANEL_STATUS_NONE: 'エラーは見つかりませんでした。',
    PANEL_ICON_WARNINGS: 'の警告が見つかりました。',
    PANEL_ICON_TOTAL: 'が見つかりました。',
    NOT_VISIBLE_ALERT: '表示しようとしているアイテムは表示されていません。非表示になっているか、アコーディオンやタブコンポーネントの中に入っている可能性があります。以下はプレビューです：',
    ERROR_MISSING_ROOT_TARGET: '対象領域<code>%(root)</code>が存在しないため、全ページのアクセシビリティを確認しました。',
    HEADING_NOT_VISIBLE_ALERT: '見出しは表示されません。非表示になっていたり、アコーディオンやタブコンポーネントの中に入っていたりすることがあります。',
    SKIP_TO_PAGE_ISSUES: 'ページの先頭へ戻る',
    CONSOLE_ERROR_MESSAGE: '申し訳ありませんが、このページのアクセシビリティチェッカーに問題があります。<a href="%(link)">このフォーム</a>または<a href="%(link)">GitHub</a>で報告していただけませんでしょうか',

    // Dismiss
    PANEL_DISMISS_BUTTON: '%(dismissCount)棄却された警告を表示する。',
    DISMISS: '却下',
    DISMISSED: '解除された警告',
    DISMISS_REMINDER: '警告は<strong>一時的に</strong>解除されるだけですのでご注意ください。ブラウザの履歴とクッキーを削除すると、すべてのページで警告が解除された状態に戻ります。',

    // Export
    DATE: '日付',
    PAGE_TITLE: 'ページタイトル',
    RESULTS: '結果',
    EXPORT_RESULTS: '結果のエクスポート',
    GENERATED: '%(tool) で生成された結果。',
    PREVIEW: 'プレビュー',
    ELEMENT: '要素',
    PATH: 'パス',

    // Colour filters
    COLOUR_FILTER: 'カラーフィルター',
    PROTANOPIA: 'プロタノピア',
    DEUTERANOPIA: 'デューテラノピア',
    TRITANOPIA: 'トリタノピア',
    MONOCHROMACY: 'モノクロマシー',
    COLOUR_FILTER_MESSAGE: '他の色との識別が困難な要素がないか、確認する。',
    RED_EYE: '赤いブラインド。',
    GREEN_EYE: 'グリーンのブラインドです。',
    BLUE_EYE: 'ブルーブラインドです。',
    MONO_EYE: '赤、青、緑のブラインド。',
    COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: 'ハイコントラストモードでは、カラーフィルターは機能しません。',

    // Alternative text stop words
    SUSPICIOUS_ALT_STOPWORDS: [
      'イマージュ',
      'グラフィック',
      'がぞう',
      '写真',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'アルト',
      'イマージュ',
      '写真',
      'デコラティブ',
      '写真',
      'プレースホルダ',
      '待受画像',
      'スペーサ',
    ],
    PARTIAL_ALT_STOPWORDS: [
      'クリック',
      'ここをクリック',
      '続きはこちら',
      '詳しくはこちらをご覧ください',
      'をクリックしてください',
      'しらべあげる',
      'ここに詳述',
      'は、ここに詳述されています',
      'ダウンロード',
      'ダウンロードはこちら',
      'もっと詳しく知る',
      'はこちらからダウンロードしてください',
      'さがしだす',
      '詳細はこちら',
      'をご覧ください',
      '詳しくはこちら',
      '形容',
      'これ',
      'ここに',
      'インフォメーション',
      'リンク',
      '学ぶ',
      '詳しく知る',
      'をもっと知ることができます',
      'もっと詳しく見る',
      'ならう',
      'も',
      'もっと詳しく',
      'ページ',
      'ペーパー',
      '読み替える',
      '読む',
      'これを読む',
      '今',
      '本ページ',
      'このページをご覧ください',
      '本サイト',
      'このウェブサイトをご覧ください',
      'ビュー',
      '私たちを見る',
      'ウェブサイト',
    ],
    WARNING_ALT_STOPWORDS: [
      'ここをクリック',
    ],
    NEW_WINDOW_PHRASES: [
      '外形的',
      'ニュータブ',
      'ニューウィンドウ',
      'ポップアップ',
      'ポップアップ',
    ],
    FILE_TYPE_PHRASES: ['ドキュメント', 'スプレッドシート', '計算シート', '圧縮ファイル', 'アーカイブされたファイル', 'ワークシート', 'パワーポイント', 'プレゼンテーション', 'インストール', 'ビデオ', 'オーディオ', 'PDF', 'ピクシブ', 'ドック', 'ドックス', 'になる', 'エムピーディー', 'パップ', 'テキスト', 'プチプチ', 'エグゼ', 'ディーエムジー', 'レントゲン写真', 'ウィンドウズ', 'マコス', 'クサビ', 'エックスエル', 'エックスエルエックス', 'エムピーフォー', 'ムーブ', 'アビ', 'ビュッ'],
    LANG_READABILITY: '読みやすさ',
    LANG_AVG_SENTENCE: '1文あたりの平均単語数：',
    LANG_COMPLEX_WORDS: '複雑な言葉：',
    LANG_TOTAL_WORDS: '言葉です：',
    LANG_VERY_DIFFICULT: '非常に難しい',
    LANG_DIFFICULT: '難しい',
    LANG_FAIRLY_DIFFICULT: 'かなり難しい',
    LANG_GOOD: '良い',
    READABILITY_NO_P_OR_LI_MESSAGE: '読みやすさのスコアを計算することができません。段落 <code>&lt;p&gt;</code> またはリストコンテンツ <code>&lt;li&gt;</code> が見つかりませんでした。',
    READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: '読みやすさのスコアを計算するためのコンテンツが十分でない。',
    HEADING_NON_CONSECUTIVE_LEVEL: '連続しない見出しレベルが使用されています。見出しはレベルを飛ばしたり、<strong>見出し %(prevLevel)</strong> から <strong {r}>見出し %(level)</strong> になってはなりません。',
    HEADING_EMPTY: '空の見出しが見つかりました！修正するには、この行を削除するか、<strong {r}>見出し %(level)</strong> から <strong>Normal</strong> または <strong>段落</strong> にフォーマットを変更してください。',
    HEADING_LONG: '見出しが長い！見出しは、内容を整理し、構造を伝えるために使用されるべきです。また、簡潔で情報量が多く、ユニークであるべきです。見出しは160文字以内（1文以内）に収めてください。<hr> 文字数です：<strong {r}>%(headingLength)</strong>。',
    HEADING_FIRST: 'ページの最初の見出しは、通常、見出し1または見出し2にします。見出し1はメインコンテンツセクションの始まりであるべきで、ページの全体的な目的を説明する主要な見出しです。<a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">見出しの構造</a>についてもっと詳しく知ることができます。',
    HEADING_MISSING_ONE: '見出し1がない。 見出し1はメインコンテンツエリアの始まりであるべきで、ページの全体的な目的を説明する主要な見出しである。<a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">見出しの構造</a>について詳しくはこちら。',
    HEADING_EMPTY_WITH_IMAGE: '見出しにはテキストがなく、画像が含まれています。これが見出しでない場合は、そのフォーマットを<strong {r}>見出し %(level)</strong>から<strong>通常</strong>または<strong>パラグラフ</strong>に変更してください。それ以外の場合、画像に装飾がない場合は、altテキストを追加してください。',
    PANEL_HEADING_MISSING_ONE: '見出しの欠落 1！',
    PANEL_NO_HEADINGS: '見出しはありません。',
    LINK_EMPTY: 'テキストのない空のリンクを削除する。',
    LINK_EMPTY_LINK_NO_LABEL: 'リンクに、スクリーンリーダーやその他の支援技術で表示可能な識別可能なテキストがない。修正するには<ul><li>リンクの行き先を説明する簡潔なテキストを追加する。</li><li><a href="https://a11y-101.com/development/icons-and-links">アイコン リンクまたは SVG</a>である場合、説明用のラベルがない可能性があります。 </li><li> このリンクがコピー/ペーストのバグによるエラーと考えられる場合は、削除を検討してください。 </li></ul>',
    LINK_LABEL: '<strong>リンクラベル：</strong> %(sanitizedText)',
    LINK_STOPWORD: 'リンクテキストは、文脈から見て十分に説明的でない場合があります：<strong {r}>%(error)</strong><hr><strong>ヒント！</strong> リンクテキストは常に明確で、ユニークで、意味のあるものでなければなりません。quot;ここをクリック&quot;やquot;もっと知りたい&quotのような一般的な単語は避けてください；',
    LINK_BEST_PRACTICES: 'リンクテキストを置き換えることを検討してください：<strong {r}>%(error)</strong><hr><ul><li>&quot;ここをクリック&quot;では、多くの人がマウスを使用しないか、モバイル機器でこのウェブサイトを見ている可能性があるのに、マウス操作に焦点が当たっています。タスクに関連する別の動詞を使用することを検討してください。</li><li>支援技術に隠されていない限り、コールトゥアクションとしてHTML記号を使用しないようにしてください。',
    LINK_URL: 'リンクテキストとして使用される長くて分かりにくいURLは、支援技術で聞き取るのが難しいかもしれません。ほとんどの場合、URL の代わりに人間が読めるテキストを使用する方がよいでしょう。<hr><strong>ヒント！</strong> リンクテキストは、常に明確で、ユニークで、意味があり、文脈から理解できるものでなければなりません。',
    LINK_DOI: 'ウェブページやオンラインのみのリソースの場合、<a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">APAスタイルガイド</a>では、作品のURLやDOIをタイトルに巻きつけて、説明的なリンクを使用することを推奨しています。リンクテキストとして使用される長くて分かりにくいURLは、支援技術でアクセスしたときに理解するのが難しいかもしれません。',
    NEW_TAB_WARNING: 'リンクは警告なしに新しいタブまたはウィンドウで開きます。そうすることで、特に視覚的なコンテンツを知覚することが困難な人々にとって、混乱させることができます。第二に、誰かの経験をコントロールしたり、彼らのために決定を下すことは、必ずしも良い習慣とは言えません。リンクテキスト内でリンクが新しいウィンドウで開くことを示す<hr><strong>ヒント！</strong>ベストプラクティスを学びましょう：<a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">リンクを新しいブラウザのウィンドウやタブで開く。</a>',
    FILE_TYPE_WARNING: 'リンク先がPDFやダウンロード可能なファイル（例：MP3、Zip、Word Doc）であることを警告せずに示す。リンクテキスト内にファイルの種類を表示する。<hr><strong>例:</strong> エグゼクティブレポート (PDF, 3MB)',
    LINK_IDENTICAL_NAME: 'リンクは別のリンクと同じテキストを持っていますが、別のページを指しています。<hr>他のリンクと区別するために、次のリンクをより説明的にすることを検討してください：<strong {r}>%(sanitizedText)</strong>。',
    MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: '画像は装飾としてマークされる必要がありますが、画像は周囲のテキストへのリンクとして使用されています。',
    MISSING_ALT_LINK_MESSAGE: '画像がリンクとして使用されていますが、altテキストが不足しています！altテキストにリンク先が記載されていることを確認してください。',
    MISSING_ALT_MESSAGE: 'altテキストがない！画像がストーリーや雰囲気、重要な情報を伝えるものであれば、必ず画像を説明すること。',
    LINK_IMAGE_BAD_ALT_MESSAGE: 'altテキスト内のファイル拡張子が見つかりました。altテキストは、画像の文字通りの説明ではなく、リンク先を説明するものであることを確認してください。削除してください：<strong {r}>%(error)</strong>.<hr><strong>alt属性:</strong> %(altText)',
    LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: 'リンクされた画像内のaltテキストが非記述またはプレースホルダーであることが判明しました。altテキストが、画像の文字通りの説明ではなく、リンク先を記述していることを確認してください。以下のaltテキストを置き換えてください：<strong {r}>%(altText)</strong>とします。',
    LINK_IMAGE_SUS_ALT_MESSAGE: '支援技術はすでにこれが画像であることを示すので、&quot;<strong {r}>%(error)</strong>&quot; は冗長であるかもしれません。altテキストは、画像の文字通りの説明ではなく、リンク先を説明するようにします。<hr> <strong>altテキスト:</strong> %(altText)',
    LINK_ALT_HAS_BAD_WORD_MESSAGE: '見つかったaltテキスト内のファイル拡張子。画像がストーリーや雰囲気、重要な情報を伝えている場合は、必ず画像を説明してください。削除してください：<strong {r}>%(error)</strong>.<hr><strong>alt属性:</strong> %(altText)',
    ALT_PLACEHOLDER_MESSAGE: '非デスクリプトまたはプレースホルダーのaltテキストが見つかりました。以下のaltテキストを、より意味のあるものに置き換えてください：<strong {r}>%(altText)</strong>となります。',
    ALT_HAS_SUS_WORD: '支援技術はすでにこれが画像であることを示すので、&quot;<strong {r}>%(error)</strong>&quot; は冗長であるかもしれません。<hr> <strong>オルトテキスト：</strong> %(altText)',
    LINK_IMAGE_ARIA_HIDDEN: '画像の周りのリンクは<code>aria-hidden=&quot;true&quot;</code>ですが、キーボードフォーカスは可能です。冗長なリンクや重複したリンクを隠す場合は、<code>tabindex=&quot;-1&quot;</code>も追加してください。',
    LINK_IMAGE_NO_ALT_TEXT: 'リンク内の画像は装飾と表示され、リンクテキストがありません。リンク先を示すaltテキストを画像に追加してください。',
    LINK_IMAGE_HAS_TEXT: 'リンク先では周囲のテキストを説明用のラベルとして使用していますが、画像は装飾としてマークされています。',
    LINK_IMAGE_LONG_ALT: 'リンク先画像のaltテキスト記述が<strong>長すぎる</strong>です。リンク先の画像のaltテキストは、画像の文字通りの説明ではなく、リンク先がどこなのかを説明する必要があります。<strong>リンク先のページのタイトルをaltテキストとして使用することを検討してください。</strong> <hr> <strong>altテキスト (<span {r}>%(altLength)</span> characters):</strong> %(altText)',
    LINK_IMAGE_ALT_WARNING: '画像リンクにaltテキストが含まれています。altテキストは、リンク先について説明していますか？リンク先のページのタイトルをaltテキストとして使用することを検討してください。<hr> <strong>altテキスト:</strong> %(altText)',
    LINK_IMAGE_ALT_AND_TEXT_WARNING: '画像リンクには、<strong>altテキストと周囲のリンクテキストの両方が含まれています。</strong>この画像が装飾的で、別のページへの機能的なリンクとして使用されている場合、画像を装飾または無効としてマークすることを検討してください -周囲のリンクテキストで十分なはずです。<hr> <strong>altテキスト:</strong> %(altText)',
    IMAGE_FIGURE_DECORATIVE: '画像は<strong>decorative</strong>とマークされており、支援技術によって無視されます。<hr> <strong>キャプション</strong>が提供されましたが、ほとんどの場合、画像にはaltテキストもあるべきです。<ul><li>altテキストは、画像に何が写っているかを簡潔に説明する必要があります。</li><li>キャプションは通常、画像を周囲のコンテンツと関連付けるためのコンテキストを提供するか、特定の情報の一部に注目させる必要があります。</li></ul>もっと学ぶ：<a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'altテキストとcaptionテキストの両方に全く同じ単語を使用しないでください。スクリーン リーダは情報を 2 回通知します。<ul><li>alt テキストは、画像に何が写っているかを簡潔に説明する必要があります。</li><li>キャプションは通常、画像を周囲のコンテンツと関連付けるためのコンテキストを提供するか、特定の情報の一部に注目させます。</li></ul>詳細はこちら：<a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> <strong>オルトテキスト：</strong> %(altText)',
    IMAGE_DECORATIVE: '画像は<strong>decorative</strong>とマークされ、支援技術によって無視されることになります。画像がストーリーや雰囲気、重要な情報を伝えるものであれば、必ずaltテキストを追加してください。',
    IMAGE_ALT_TOO_LONG: 'Altテキストの説明が<strong>長すぎる</strong>。Altテキストは、<em>ツイート</em>のように簡潔で、かつ意味のあるものにしましょう（100文字前後）。これが複雑な画像やグラフであれば、画像の長い説明を下のテキストに入れたり、アコーディオン・コンポーネントにすることを検討してください。<hr> <strong>オルトテキスト（<span {r}>%(altLength)</span> 文字）:</strong> %(altText)',
    IMAGE_PASS: '<strong>オルトテキスト:</strong> %(altText)',
    LABELS_MISSING_IMAGE_INPUT_MESSAGE: '画像ボタンにaltテキストがありません。アクセシブルな名称を提供するために、altテキストを追加してください。例えば、以下のようなものです：<em>検索</em>または<em>送信</em>。',
    LABELS_INPUT_RESET_MESSAGE: 'リセット ボタンは、間違って起動しやすいので、特に必要な場合を除き、<strong>使用すべきではありません</strong>。<hr> <strong>ヒント！</strong> <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">リセットボタンとキャンセルボタンがユーザビリティの問題を引き起こす理由</a>を学びましょう。',
    LABELS_ARIA_LABEL_INPUT_MESSAGE: '入力にはアクセシブルな名前がついていますが、目に見えるラベルもつけてください。<hr> この入力のアクセシブルネームは次のとおりです：<strong>%(sanitizedText)</strong>です。',
    LABELS_NO_FOR_ATTRIBUTE_MESSAGE: 'この入力に関連するラベルはありません。この入力の<code>id</code>に一致するラベルに<code>for</code>属性を追加してください。<hr> この入力のIDは次のとおりです：<strong>id=&#34;%(id)&#34;</strong> です。',
    LABELS_MISSING_LABEL_MESSAGE: 'この入力に関連するラベルはありません。この入力に <code>id</code> を追加し、ラベルに一致する <code>for</code> 属性を追加してください。',
    EMBED_VIDEO: '<strong>すべてのビデオにクローズドキャプションがあることを確認してください。</strong>すべてのオーディオおよびビデオコンテンツにキャプションを提供することは、レベルAの必須要件です。キャプションは、聴覚障害者をサポートします。',
    EMBED_AUDIO: 'すべてのポッドキャストに<strong>トランスクリプトを提供するようにしてください。</strong>オーディオコンテンツにトランスクリプトを提供することは、レベルAの必須要件です。トランスクリプトは、ろう者や難聴者をサポートするものですが、誰にとっても有益なものです。トランスクリプトを下またはアコーディオンパネルに配置することを検討してください。',
    EMBED_DATA_VIZ: 'このようなデータ可視化ウィジェットは、キーボードやスクリーンリーダーを使って操作する人にとって問題があることが多く、弱視や色覚異常の人にとっては大きな障害となることがあります。ウィジェットの下に、同じ情報を別の形式（テキストまたは表）で提供することが推奨されます。<a href="https://www.w3.org/WAI/tutorials/images/complex">複雑な画像</a>についてもっと詳しく知る。',
    EMBED_MISSING_TITLE: '埋め込みコンテンツには、その内容を説明するアクセシブルネームが必要です。<code>iframe</code> 要素にユニークな <code>title</code> または <code>aria-label</code> 属性を指定してください。<a href="https://dequeuniversity.com/tips/provide-iframe-titles">iFrame.</a>について詳しくはこちら。',
    EMBED_GENERAL_WARNING: '埋め込みコンテンツを確認することができません。画像にはaltテキスト、動画にはキャプション、テキストには十分なコントラスト、インタラクティブなコンポーネントには<a href="https://webaim.org/techniques/keyboard/">キーボードアクセス可能であることを確認してください。</a>',
    QA_BAD_LINK: '不正なリンクが見つかりました。リンクは開発環境を指しているようです。<hr> このリンクは、次の場所を指しています：<br> <strong {r}>%(el)</strong>。',
    QA_BAD_ITALICS: '太字と斜体のタグは意味上の意味があり、段落全体を強調するために<strong>使用すべきではありません</strong>。太字は、単語やフレーズを強く<strong>強調するために使用されるべきです。イタリックは、固有名詞（例：書籍や記事のタイトル）、外国語、引用を強調するために使用されるべきです。長い引用文は、ブロッククオートとしてフォーマットされるべきである。',
    QA_PDF: 'PDFのアクセシビリティをチェックできない。PDFはウェブコンテンツとみなされ、同様にアクセシビリティを確保する必要があります。PDFには、スクリーンリーダーを使用する人（構造タグがない、フォームフィールドラベルがない）や弱視の人（拡大してもテキストがリフローしない）にとって問題があることがよくあります。<ul><li>これがフォームの場合は、アクセシブルな HTML フォームを代替として使用することを検討してください。</li><li>これが文書の場合は、Web ページへの変換を検討してください。</li></ul>その他、<a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF を Acrobat DC.</a> でアクセス可能か確認してください。',
    QA_DOCUMENT: 'ドキュメントのアクセシビリティを確認できません。リンクされたドキュメントはウェブコンテンツとみなされ、同様にアクセシブルにする必要があります。このドキュメントを手動で確認してください。<ul><li><a href="https://support.google.com/docs/answer/6199477?hl=ja">Google Workspace のドキュメントまたはプレゼンテーションをよりアクセスしやすくする</a></li><li><a href="https://support.microsoft.com/ja/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Office のドキュメントをよりアクセスしやすくする</a></li></ul>。',
    QA_PAGE_LANGUAGE: 'ページの言語が宣言されていません！<a href="https://www.w3.org/International/questions/qa-html-language-declarations">HTMLタグで言語を宣言してください。</a>',
    QA_PAGE_TITLE: 'ページタイトルがありません！<a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/title">ページタイトルを記入してください。</a>',
    QA_BLOCKQUOTE_MESSAGE: 'これは見出しなのでしょうか？<strong {r}>%(sanitizedText)</strong> <hr> ブロッククォートは引用にのみ使用する必要があります。もしこれが見出しとして意図されているのであれば、このブロッククオートを意味的な見出し（例：見出し2または見出し3）に変更してください。',
    QA_FAKE_HEADING: 'これは見出しなのでしょうか？<strong {r}>%(boldtext)</strong> <hr> 太字や大きなテキストの行は見出しのように見えるかもしれませんが、スクリーンリーダーを使っている人は、それが重要であることを見分けることも、そのコンテンツに飛ぶこともできません。太字や大きなテキストは、セマンティックな見出し（見出し2～見出し6）を決して置き換えるべきではありません。',
    QA_SHOULD_BE_LIST: 'リストを作成しようとしているのでしょうか？可能なリスト項目が見つかりました：<strong {r}>%(firstPrefix)</strong> <hr> セマンティックリストを使用するには、代わりに箇条書きまたは数字の書式設定ボタンを使用することを確認してください。セマンティックリストを使用すると、支援技術は、項目の総数やリスト内の各項目の相対位置などの情報を伝達することができます。<a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">セマンティックリスト</a>についてもっと詳しく知ることができます。',
    QA_UPPERCASE_WARNING: '全角文字が見つかりました。スクリーンリーダーによっては、全角のテキストを頭字語と解釈し、各文字を個別に読み上げる場合があります。また、全角文字が読みにくく、叫んでいるように見える方もいらっしゃいます。',
    QA_DUPLICATE_ID: '<strong>重複したID</strong>が見つかりました。重複したIDのエラーは、支援技術がコンテンツと相互作用しようとするときに問題を引き起こすことが知られています。<hr> 以下のIDを削除または変更してください：<strong {r}>%(id)</strong>です。',
    QA_TEXT_UNDERLINE_WARNING: '下線付きのテキストは、リンクと混同されることがあります。<code>&lt;strong&gt;</code><strong>strong importance</strong><code>&lt;/strong&gt;</code> または <code>&lt;em&gt;</code><emphasis</em><code>&lt;/em&gt;</code> など別のスタイルにすることを考えてください。',
    QA_SUBSCRIPT_WARNING: '下付き文字と上付き文字の書式オプションは、組版規則や標準のためにテキストの位置を変更するためにのみ使用されるべきです。プレゼンテーションや見栄えのためにのみ使用するのは<strong>NG</strong>です。文章全体をフォーマットすることは、読みやすさの問題を提起します。適切な使用例としては、指数の表示、4番目の代わりに4<sup>th</sup>のような序数、化学式（例：H<sub>2</sub>O）などが挙げられます。',
    TABLES_MISSING_HEADINGS: 'テーブルのヘッダーがない！アクセシブルなテーブルには、ヘッダーセルとデータセルを示すHTMLマークアップが必要であり、それらの関係を定義しています。この情報は、支援技術を使用する人にコンテキストを提供します。テーブルは、表形式のデータのみに使用する必要があります。<a href="https://www.w3.org/WAI/tutorials/tables/">アクセシブルテーブル</a>についてもっと詳しく知ることができます。',
    TABLES_SEMANTIC_HEADING: '見出し2や見出し3のような意味上の見出しは、コンテンツのセクションにのみ使用されるべきで、HTMLテーブルでは<strong>使用できません</strong>。テーブルの見出しは、<code>&lt;th&gt;</code>要素で表すようにしましょう。<a href="https://www.w3.org/WAI/tutorials/tables/">アクセシブルテーブル</a>について詳しくはこちら。',
    TABLES_EMPTY_HEADING: '空のテーブルヘッダが見つかりました！テーブルヘッダは<strong>決して</strong>空であってはなりません。行や列のヘッダーを指定して、それらの関係を伝えることが重要です。この情報は、支援技術を使用する人々にコンテキストを提供します。テーブルは表形式のデータにのみ使用されるべきであるということを心に留めておいてください。<a href="https://www.w3.org/WAI/tutorials/tables/">アクセシブルテーブル</a>についてもっと詳しく知る。',
    CONTRAST_ERROR: 'このテキストは、背景とのコントラストが十分ではありません。コントラスト比は、通常のテキストでは少なくとも4.5:1、大きなテキストでは3:1であるべきです。<hr> 以下のテキストでは、コントラスト比は <strong {r}>%(cratio)</strong> です：<strong {r}>%(sanitizedText)</strong>となります。',
    CONTRAST_WARNING: 'このテキストのコントラストは不明なので、手動で確認する必要があります。テキストと背景が強いコントラストを持つ色であることを確認する。コントラスト比は、通常のテキストでは少なくとも4.5:1、大きなテキストでは3:1であるべきです。<hr> <strong>レビューしてください：</strong> %(sanitizedText)',
    CONTRAST_INPUT_ERROR: 'この入力内のテキストは、背景とのコントラストが十分ではありません。コントラスト比は、通常のテキストでは少なくとも4.5:1、大きなテキストでは3:1であるべきです。<hr> コントラスト比：<strong {r}>%(cratio)</strong>となります。',
  },
};

export { ja as default };
