
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
var ko = {
  // Korean
  strings: {
    LANG_CODE: 'ko',
    MAIN_TOGGLE_LABEL: '접근성 확인',
    CONTAINER_LABEL: '접근성 검사기',
    ERROR: '오류',
    ERRORS: '오류',
    WARNING: '경고',
    WARNINGS: '경고',
    GOOD: '양호',
    ON: '켜기',
    OFF: '꺼짐',
    ALERT_TEXT: '알림',
    ALERT_CLOSE: '닫기',
    OUTLINE: '페이지 개요',
    PAGE_ISSUES: '페이지 문제',
    SETTINGS: '설정',
    CONTRAST: '대비',
    FORM_LABELS: '양식 레이블',
    LINKS_ADVANCED: '링크(고급)',
    DARK_MODE: '다크 모드',
    SHORTCUT_SCREEN_READER: '이슈로 건너뛰기. 키보드 단축키: Alt S',
    SHORTCUT_TOOLTIP: '이슈로 건너뛰기',
    NEW_TAB: '새 탭에서 열기',
    PANEL_HEADING: '접근성 확인',
    PANEL_STATUS_NONE: '오류를 찾을 수 없습니다.',
    PANEL_ICON_WARNINGS: '경고가 발견되었습니다.',
    PANEL_ICON_TOTAL: '발견된 총 문제 수입니다.',
    NOT_VISIBLE_ALERT: '보려는 항목이 보이지 않거나 숨겨져 있거나 아코디언 또는 탭 구성 요소 안에 있을 수 있습니다. 다음은 미리 보기입니다:',
    ERROR_MISSING_ROOT_TARGET: '대상 영역 <코드>%(root)</코드>가 존재하지 않으므로 전체 페이지의 접근성을 확인하지 못했습니다.',
    HEADING_NOT_VISIBLE_ALERT: '제목은 보이지 않거나 숨겨져 있거나 아코디언 또는 탭 구성 요소 안에 있을 수 있습니다.',
    SKIP_TO_PAGE_ISSUES: '페이지로 건너뛰기 이슈',
    CONSOLE_ERROR_MESSAGE: '죄송하지만 이 페이지의 접근성 검사기에 문제가 있습니다. <a href="%(link)">이 양식</a> 또는 <a href="%(link)">GitHub</a>에서 신고해 주시겠어요?',

    // Dismiss
    PANEL_DISMISS_BUTTON: '%(dismissCount) 해제된 경고 표시',
    DISMISS: '해지',
    DISMISSED: '기각된 경고',
    DISMISS_REMINDER: '경고는 <strong>일시적으로</strong>만 해제됩니다. 브라우저 기록과 쿠키를 지우면 모든 페이지에서 이전에 해제된 경고가 모두 복원됩니다.',

    // Export
    DATE: '날짜',
    PAGE_TITLE: '페이지 제목',
    RESULTS: '결과',
    EXPORT_RESULTS: '결과 내보내기',
    GENERATED: '%(tool)로 생성된 결과.',
    PREVIEW: '미리보기',
    ELEMENT: '요소',
    PATH: '경로',

    // Colour filters
    COLOUR_FILTER: '컬러 필터',
    PROTANOPIA: '프로타노피아',
    DEUTERANOPIA: '듀테라노피아',
    TRITANOPIA: '트리타노피아',
    MONOCHROMACY: '단색',
    COLOUR_FILTER_MESSAGE: '다른 색상과 구분하기 어렵거나 인지하기 어려운 요소가 있는지 확인하세요.',
    RED_EYE: '레드 블라인드.',
    GREEN_EYE: '녹색 블라인드.',
    BLUE_EYE: '블루 블라인드.',
    MONO_EYE: '빨간색, 파란색, 녹색 블라인드.',
    COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: '고대비 모드에서는 컬러 필터가 작동하지 않습니다.',

    // Alternative text stop words
    SUSPICIOUS_ALT_STOPWORDS: [
      '이미지',
      '그래픽',
      '사진',
      '사진',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'alt',
      '이미지',
      '사진',
      '장식',
      '자리 표시자',
      '플레이스홀더 이미지',
      '스페이서',
    ],
    PARTIAL_ALT_STOPWORDS: [
      '클릭',
      '여기를 클릭하세요',
      '자세한 내용을 보려면 여기를 클릭하세요.',
      '자세히 알아보려면 여기를 클릭하세요.',
      '여기를 클릭',
      '체크 아웃',
      '여기에서 자세히 보기',
      '다운로드',
      '여기에서 다운로드',
      '자세히 알아보기',
      '자세히 알아보기',
      'form',
      '여기',
      '정보',
      '정보',
      '링크',
      '배우기',
      '자세히 알아보기',
      '다음을 배우십시오.',
      '더 보기',
      '페이지',
      '종이',
      '자세히 보기',
      '읽기',
      '이 글 읽기',
      '이',
      '이 페이지',
      '이 웹사이트',
      '보기',
      '보기',
      '웹사이트',
    ],
    WARNING_ALT_STOPWORDS: [
      '여기를 클릭하세요',
    ],
    NEW_WINDOW_PHRASES: [
      '외부',
      '새 탭',
      '새 창',
      '팝업',
      '팝업',
    ],
    FILE_TYPE_PHRASES: [
      '문서',
      '스프레드시트',
      '계산 시트',
      '압축 파일',
      '보관된 파일',
      '워크시트',
      '파워포인트',
      '프레젠테이션',
      '설치',
      '비디오',
      '오디오',
      'pdf',
    ],
    LANG_READABILITY: '가독성',
    LANG_AVG_SENTENCE: '문장당 평균 단어 수:',
    LANG_COMPLEX_WORDS: '복잡한 단어:',
    LANG_TOTAL_WORDS: '단어:',
    LANG_VERY_DIFFICULT: '매우 어려움',
    LANG_DIFFICULT: '어려움',
    LANG_FAIRLY_DIFFICULT: '상당히 어려움',
    LANG_GOOD: '양호',
    READABILITY_NO_P_OR_LI_MESSAGE: '가독성 점수를 계산할 수 없습니다. 단락 <코드>&lt;p&gt;</코드> 또는 목록 콘텐츠 <코드>&lt;li&gt;</코드>를 찾을 수 없습니다.',
    READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: '가독성 점수를 계산할 콘텐츠가 충분하지 않습니다.',
    HEADING_NON_CONSECUTIVE_LEVEL: '비연속적인 머리글 레벨이 사용되었습니다. 제목은 레벨을 건너뛰거나 <strong>헤딩 %(level)</strong>에서 <strong {r}>헤딩 %(level)</strong>로 이동하지 않아야 합니다.',
    HEADING_EMPTY: '빈 제목이 발견되었습니다! 수정하려면 이 줄을 삭제하거나 형식을 <strong {r}>헤딩 %(level)</strong>에서 <strong>일반</strong> 또는 <strong>단락</strong>으로 변경하세요.',
    HEADING_LONG: '제목이 길어요! 제목은 콘텐츠를 구성하고 구조를 전달하는 데 사용해야 합니다. 제목은 간결하고 유익하며 독창적이어야 합니다. 제목은 160자 이내(한 문장 이하)로 유지하세요. <hr> 글자 수입니다: <strong {r}>%(headingLength)</strong>',
    HEADING_FIRST: '페이지의 첫 번째 제목은 일반적으로 제목 1 또는 제목 2여야 합니다. 제목 1은 주요 콘텐츠 섹션의 시작 부분이어야 하며 페이지의 전반적인 목적을 설명하는 주요 제목입니다. <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">헤딩 구조에 대해 자세히 알아보기.</a>',
    HEADING_MISSING_ONE: '제목 1이 누락되었습니다. 제목 1은 주요 콘텐츠 영역의 시작 부분이어야 하며 페이지의 전반적인 목적을 설명하는 기본 제목입니다. <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">헤딩 구조에 대해 자세히 알아보기.</a>',
    HEADING_EMPTY_WITH_IMAGE: '제목에 텍스트가 없지만 이미지가 포함되어 있습니다. 제목이 아닌 경우 형식을 <strong {r}>제목 %(level)</strong>에서 <strong>일반</strong> 또는 <strong>단락</strong>으로 변경합니다. 그렇지 않으면 장식용 이미지가 아닌 경우 이미지에 대체 텍스트를 추가하세요.',
    PANEL_HEADING_MISSING_ONE: '제목 1이 없습니다!',
    PANEL_NO_HEADINGS: '제목을 찾을 수 없습니다.',
    LINK_EMPTY: '텍스트가 없는 빈 링크를 제거합니다.',
    LINK_EMPTY_LINK_NO_LABEL: '링크에 화면 리더 및 기타 보조 기술에서 볼 수 있는 식별 가능한 텍스트가 없습니다. 수정하려면: <ul><li>링크가 어디로 연결되는지 설명하는 간결한 텍스트를 추가합니다.</li><li>이 링크가 <a href="https://a11y-101.com/development/icons-and-links">아이콘 링크 또는 SVG인 경우 설명 레이블이 누락되었을 가능성이 높습니다.</li><li>복사/붙여넣기 버그로 인한 오류라고 생각되면 링크를 삭제하는 것이 좋습니다.</li></ul>',
    LINK_LABEL: '<strong>링크 레이블:</strong> %(sanitizedText)',
    LINK_STOPWORD: "링크 텍스트가 문맥에 맞지 않게 충분히 설명적이지 않을 수 있습니다: <strong {r}>%(error)</strong><hr><strong>Tip!</strong> 링크 텍스트는 항상 명확하고 고유하며 의미 있는 것이어야 합니다. '여기를 클릭하세요' 또는 '자세히 알아보기'와 같은 일반적인 단어는 피하세요;",
    LINK_BEST_PRACTICES: '링크 텍스트를 바꾸는 것이 좋습니다: <strong {r}>%(error)</strong><hr><ul><li>"여기를 클릭하세요"는 마우스를 사용하지 않거나 모바일 장치에서 이 웹사이트를 볼 수 있는 많은 사람들을 위해 마우스 메커니즘에 중점을 둔 위치입니다. 작업과 관련된 다른 동사를 사용하는 것이 좋습니다.</li><li>보조 기술에 숨겨져 있지 않는 한 HTML 기호를 콜투액션으로 사용하지 마세요.</li></ul>',
    LINK_URL: '링크 텍스트로 사용되는 길고 이해하기 어려운 URL은 보조 기술로 이해하기 어려울 수 있습니다. 대부분의 경우 URL 대신 사람이 읽을 수 있는 텍스트를 사용하는 것이 좋습니다. 짧은 URL(예: 사이트 홈페이지)은 괜찮습니다.<hr><strong>Tip!</strong> 링크 텍스트는 항상 명확하고 고유하며 의미 있는 문맥을 통해 이해할 수 있어야 합니다.',
    LINK_DOI: '웹 페이지 또는 온라인 전용 리소스의 경우 <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">APA 스타일 가이드</a>에서는 제목 주위에 저작물의 URL 또는 DOI를 감싸는 설명 링크를 사용할 것을 권장합니다. 링크 텍스트로 사용되는 길고 이해하기 어려운 URL은 보조 기술을 사용하여 이해하기 어려울 수 있습니다.',
    NEW_TAB_WARNING: '경고 없이 새 탭 또는 새 창에서 링크가 열립니다. 특히 시각적 콘텐츠를 인식하는 데 어려움을 겪는 사람들에게는 혼란을 줄 수 있습니다. 둘째, 다른 사람의 경험을 통제하거나 대신 결정을 내리는 것은 항상 좋은 관행이 아닙니다. 링크 텍스트 내에 링크가 새 창에서 열림<hr><strong>팁!</strong> 모범 사례 알아보기임을 표시하세요: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">새 브라우저 창 및 탭에서 링크 열기</a>',
    FILE_TYPE_WARNING: '링크는 경고 없이 PDF 또는 다운로드 가능한 파일(예: MP3, Zip, Word Doc)을 가리킵니다. 링크 텍스트에 파일 유형을 표시합니다. 대용량 파일인 경우 파일 크기를 포함하는 것이 좋습니다.<hr><strong>예시:</strong> 임원 보고서(PDF, 3MB)',
    LINK_IDENTICAL_NAME: '다른 페이지를 가리키지만 링크의 텍스트가 다른 링크와 동일합니다. 동일한 텍스트의 링크가 여러 개 있으면 화면 리더를 사용하는 사용자에게 혼란을 줄 수 있습니다.<hr>다음 링크를 다른 링크와 구분할 수 있도록 더 설명적으로 만드는 것을 고려하세요: <strong {r}>%(sanitizedText)</strong>',
    MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: '이미지가 주변 텍스트와 함께 링크로 사용되고 있지만 alt 속성은 장식용 또는 null로 표시되어야 합니다.',
    MISSING_ALT_LINK_MESSAGE: '이미지가 링크로 사용 중이지만 대체 텍스트가 누락되었습니다! 링크가 어디로 연결되는지 설명하는 대체 텍스트를 입력하세요.',
    MISSING_ALT_MESSAGE: '대체 텍스트가 누락되었습니다! 이미지가 스토리, 분위기 또는 중요한 정보를 전달하는 경우 이미지에 대한 설명을 반드시 기재하세요.',
    LINK_IMAGE_BAD_ALT_MESSAGE: '대체 텍스트 내의 파일 확장자를 찾았습니다. 대체 텍스트가 이미지에 대한 문자 그대로의 설명이 아니라 링크의 목적지를 설명하는지 확인하세요. 제거합니다: <strong {r}>%(error)</strong>.<hr><strong>대체 텍스트:</strong> %(altText)',
    LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: '링크된 이미지에 설명이 없거나 자리 표시자 대체 텍스트가 발견되었습니다. 대체 텍스트가 이미지에 대한 문자 그대로의 설명이 아니라 링크의 대상을 설명하는지 확인합니다. 다음 대체 텍스트를 교체합니다: <strong {r}>%(altText)</strong>',
    LINK_IMAGE_SUS_ALT_MESSAGE: '보조 기술은 이미 이미지임을 표시하므로 <strong {r}>%(error)</strong>가 중복될 수 있습니다. 대체 텍스트가 이미지에 대한 문자 그대로의 설명이 아니라 링크의 목적지를 설명하는지 확인하세요. <hr> <strong>대체 텍스트:</strong> %(altText)',
    LINK_ALT_HAS_BAD_WORD_MESSAGE: '대체 텍스트 내의 파일 확장자를 찾았습니다. 이미지가 스토리, 분위기 또는 중요한 정보를 전달하는 경우 이미지를 설명해야 합니다. 제거합니다: <strong {r}>%(error)</strong>.<hr><strong>대체 텍스트:</strong> %(altText)',
    ALT_PLACEHOLDER_MESSAGE: '설명이 없거나 자리 표시자 대체 텍스트가 발견되었습니다. 다음 대체 텍스트를 더 의미 있는 것으로 바꾸세요: <strong {r}>%(altText)</strong>',
    ALT_HAS_SUS_WORD: '보조 기술은 이미 이미지임을 표시하므로 <strong {r}>%(error)</strong>가 중복될 수 있습니다. <hr> <strong>대체 텍스트:</strong> %(altText)',
    LINK_IMAGE_ARIA_HIDDEN: '이미지 주위의 링크에는 <code>aria-hidden=&quot;true&quot;</code>가 있지만 여전히 키보드 포커스를 사용할 수 있습니다. 중복되거나 중복된 링크를 숨기려면 <code>tabindex=&quot;-1&quot;</code>도 추가하세요.',
    LINK_IMAGE_NO_ALT_TEXT: '링크 내 이미지는 장식용으로 표시되어 있으며 링크 텍스트가 없습니다. 링크의 목적지를 설명하는 대체 텍스트를 이미지에 추가하세요.',
    LINK_IMAGE_HAS_TEXT: '링크가 주변 텍스트를 설명 레이블로 사용하고 있지만 이미지는 장식용으로 표시됩니다.',
    LINK_IMAGE_LONG_ALT: '링크된 이미지의 대체 텍스트 설명이 <strong>너무 깁니다</strong>. 링크된 이미지의 대체 텍스트는 이미지에 대한 문자 그대로의 설명이 아니라 링크를 통해 이동하는 위치를 설명해야 합니다. <strong>링크되는 페이지의 제목을 대체 텍스트로 사용하는 것이 좋습니다.</strong> <hr> <strong>대체 텍스트(<span {r}>%(altLength)</span> 문자):</strong> %(altText)',
    LINK_IMAGE_ALT_WARNING: '이미지 링크에 대체 텍스트가 포함되어 있습니다. 대체 텍스트에 링크가 어디로 연결되는지 설명되어 있나요? <strong>링크하는 페이지의 제목을 대체 텍스트로 사용하는 것이 좋습니다.</strong> <hr> <strong>대체 텍스트:</strong> %(altText)',
    LINK_IMAGE_ALT_AND_TEXT_WARNING: '이미지 링크에 <strong>대체 텍스트와 주변 링크 텍스트가 모두 포함됨</strong> 이 이미지가 장식용이고 다른 페이지에 대한 기능적 링크로 사용되는 경우 이미지를 장식용으로 표시하거나 주변 링크 텍스트로 충분할 수 있도록 null로 표시하는 것을 고려하세요. <hr> <strong>대체 텍스트:</strong> %(altText)',
    IMAGE_FIGURE_DECORATIVE: '이미지가 <strong>장식</strong>으로 표시되어 보조 기술에서 무시됩니다. <hr> <strong>캡션</strong>이 제공되었더라도 이미지에는 대부분의 경우 대체 텍스트가 있어야 합니다. <ul><li>대체 텍스트는 이미지에 포함된 내용에 대한 간결한 설명을 제공해야 합니다.</li><li>캡션은 일반적으로 이미지를 주변 콘텐츠와 다시 연관시키거나 특정 정보에 주의를 기울일 수 있도록 맥락을 제공해야 합니다.</li></ul>자세히 알아보기: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">알트 대 그림 캡션.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: '대체 텍스트와 캡션 텍스트에 정확히 같은 단어를 사용하지 마세요. 화면 리더는 정보를 두 번 알립니다.<ul><li>대체 텍스트는 이미지에 포함된 내용에 대한 간결한 설명을 제공해야 합니다.</li><li>캡션은 일반적으로 이미지를 주변 콘텐츠와 다시 연관시키거나 특정 정보에 주목할 수 있도록 맥락을 제공해야 합니다.</li></ul> 자세히 알아보기: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">알트 대 그림 캡션.</a> <hr> <strong>대체 텍스트:</strong> %(altText)',
    IMAGE_DECORATIVE: "이미지는 '장식용'으로 표시되어 보조 기술에서 무시됩니다. 이미지가 스토리, 분위기 또는 중요한 정보를 전달하는 경우 대체 텍스트를 추가해야 합니다.",
    IMAGE_ALT_TOO_LONG: '대체 텍스트 설명이 <strong>너무 깁니다</strong>. 대체 텍스트는 간결하면서도 트윗처럼 의미 있는 내용이어야 합니다(100자 내외). 복잡한 이미지나 그래프인 경우 이미지에 대한 긴 설명을 아래 텍스트나 아코디언 구성 요소에 넣는 것이 좋습니다. <hr> <strong>대체 텍스트(<span {r}>%(altLength)</span> 문자):</strong> %(altText)',
    IMAGE_PASS: '<strong>대체 텍스트:</strong> %(altText)',
    LABELS_MISSING_IMAGE_INPUT_MESSAGE: '이미지 버튼에 대체 텍스트가 없습니다. 접근 가능한 이름을 제공하기 위해 대체 텍스트를 추가하세요. 예: <em>검색</em> 또는 <em>제출</em>.',
    LABELS_INPUT_RESET_MESSAGE: '재설정 버튼은 실수로 활성화하기 쉬우므로 특별히 필요한 경우가 아니라면 사용하지 않는 것이 좋습니다. <hr> <strong>Tip!</strong> <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">재설정 및 취소 버튼이 사용성 문제를 일으키는 이유에 대해 알아보세요.</a>',
    LABELS_ARIA_LABEL_INPUT_MESSAGE: '입력에 접근 가능한 이름이 있지만 레이블도 표시되어 있는지 확인하세요. <hr> 이 입력의 접근 가능한 이름은 다음과 같습니다: <strong>%(sanitizedText)</strong>',
    LABELS_NO_FOR_ATTRIBUTE_MESSAGE: '이 입력과 연결된 레이블이 없습니다. 이 입력의 <코드>ID</코드>와 일치하는 레이블에 <코드>용</코드> 속성을 추가합니다. <hr> 이 입력의 ID는 다음과 같습니다: <strong>id=&#34;%(id)&#34;</strong>',
    LABELS_MISSING_LABEL_MESSAGE: '이 입력과 연결된 레이블이 없습니다. 이 입력에 <코드>아이디</코드>를 추가하고 레이블에 일치하는 <코드>용</코드> 속성을 추가하세요.',
    EMBED_VIDEO: '모든 동영상에 자막이 있는지 확인하세요.</strong> 모든 오디오 및 동영상 콘텐츠에 자막을 제공하는 것은 필수 레벨 A 요건입니다. 자막은 청각 장애가 있거나 난청인 사용자를 지원합니다.',
    EMBED_AUDIO: '모든 팟캐스트에 <strong>대본을 제공해야 합니다. </strong> 오디오 콘텐츠에 대한 대본 제공은 필수 레벨 A 요건입니다. 대본은 청각 장애가 있거나 청각이 불편한 사람들을 지원하지만 모든 사람에게 도움이 될 수 있습니다. 대본을 아래 또는 아코디언 패널 안에 배치하는 것을 고려하세요.',
    EMBED_DATA_VIZ: '이와 같은 데이터 시각화 위젯은 키보드나 화면 리더를 사용하여 탐색하는 사람들에게 종종 문제가 되며, 저시력자나 색맹인 사람들에게는 상당한 어려움을 초래할 수 있습니다. 위젯 아래에 동일한 정보를 다른 형식(텍스트 또는 표)으로 제공하는 것이 좋습니다. <hr> 복잡한 이미지에 대해 자세히 알아보기 <a href="https://www.w3.org/WAI/tutorials/images/complex">컴플렉스 이미지.</a>',
    EMBED_MISSING_TITLE: '임베드된 콘텐츠에는 콘텐츠를 설명하는 접근 가능한 이름이 필요합니다. <code>iframe</code> 요소에 고유한 <code>title</code> 또는 <code>aria-label</code> 속성을 제공하세요. <a href="https://dequeuniversity.com/tips/provide-iframe-titles">iFrames.</a>에 대해 자세히 알아보기',
    EMBED_GENERAL_WARNING: '삽입된 콘텐츠를 확인할 수 없습니다. 이미지에 대체 텍스트가 있는지, 동영상에 캡션이 있는지, 텍스트의 대비가 충분한지, 인터랙티브 구성 요소가 <a href="https://webaim.org/techniques/keyboard/">키보드에 액세스할 수 있는지 확인하세요.',
    QA_BAD_LINK: '잘못된 링크를 찾았습니다. 링크가 개발 환경을 가리키는 것으로 보입니다. <hr> 이 링크는 다음을 가리킵니다: <br> <strong {r}>%(el)</strong>',
    QA_BAD_ITALICS: '굵게 및 이탤릭체 태그는 의미론적 의미가 있으며, 전체 단락을 강조할 때는 <강함>이 아닌 <강함>을 사용해야 합니다. 굵은 텍스트는 단어나 문구에 강한 <강한> 강조를 제공할 때 사용해야 합니다. 고유명사(예: 책 및 기사 제목), 외래어, 따옴표는 이탤릭체로 강조 표시해야 합니다. 긴 따옴표는 블록 따옴표로 서식을 지정해야 합니다.',
    QA_PDF: 'PDF의 접근성을 확인할 수 없습니다. PDF는 웹 콘텐츠로 간주되므로 접근성을 제공해야 합니다. PDF에는 화면 리더를 사용하는 사용자(구조 태그 누락 또는 양식 필드 레이블 누락)와 저시력 사용자(확대 시 텍스트가 리플로우되지 않음)를 위한 문제가 포함되어 있는 경우가 많습니다. <ul><li>양식인 경우 접근 가능한 HTML 양식을 대안으로 사용해 보십시오.</li><li>문서인 경우 웹 페이지로 변환해 보십시오.</li></ul>그렇지 않은 경우 <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF의 접근성을 확인하십시오.</a>를 확인하십시오.',
    QA_DOCUMENT: '문서의 접근성을 확인할 수 없습니다. 링크된 문서는 웹 콘텐츠로 간주되므로 접근성을 제공해야 합니다. 이 문서를 수동으로 검토해 주세요. <a href="https://support.google.com/docs/answer/6199477?hl=ko">Google 스페이스 문서 또는 프레젠테이션에 더 쉽게 액세스할 수 있도록 설정하세요.</a></li><li> <a href="https://support.microsoft.com/ko/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Office 문서에 더 쉽게 액세스할 수 있도록 설정하세요.</a></li></ul>',
    QA_PAGE_LANGUAGE: '페이지 언어가 선언되지 않았습니다! <a href="https://www.w3.org/International/questions/qa-html-language-declarations">HTML 태그에 언어를 선언하세요.</a>',
    QA_PAGE_TITLE: '페이지 제목이 누락되었습니다! <a href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/title">페이지 제목을 입력하세요.</a>',
    QA_BLOCKQUOTE_MESSAGE: '제목인가요? <strong {r}>%(sanitizedText)</strong> <hr> 블록 따옴표는 따옴표로만 사용해야 합니다. 제목으로 사용하려는 경우 이 블록 따옴표를 의미론적 제목(예: 제목 2 또는 제목 3)으로 변경하세요.',
    QA_FAKE_HEADING: '이것이 제목인가요? <strong {r}>%(boldtext)</strong> <hr> 굵거나 큰 텍스트 한 줄은 제목처럼 보일 수 있지만 화면 리더를 사용하는 사람은 이 텍스트가 중요하다는 것을 알거나 해당 콘텐츠로 넘어갈 수 없습니다. 굵거나 큰 텍스트는 의미론적 제목(제목 2~제목 6)을 절대 대체해서는 안 됩니다.',
    QA_SHOULD_BE_LIST: '목록을 만들려고 하나요? 가능한 목록 항목을 찾았습니다: <strong {r}>%(firstPrefix)</strong> <hr> 대신 글머리 기호 또는 숫자 서식 지정 버튼을 사용하여 시맨틱 목록을 사용해야 합니다. 시맨틱 목록을 사용하는 경우 보조 기술은 총 항목 수 및 목록에서 각 항목의 상대적 위치와 같은 정보를 전달할 수 있습니다. 시맨틱 목록에 대해 자세히 알아보기 <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">시맨틱 목록.</a>',
    QA_UPPERCASE_WARNING: '모든 대문자를 찾았습니다. 일부 화면 리더는 대문자 텍스트를 약어로 해석하여 각 문자를 개별적으로 읽을 수 있습니다. 또한 일부 사람들은 대문자를 더 읽기 어려워하며 소리치는 것처럼 보일 수 있습니다.',
    QA_DUPLICATE_ID: '<strong>중복 ID를 찾았습니다. 중복 ID 오류는 보조 기술이 콘텐츠와 상호 작용할 때 문제를 일으키는 것으로 알려져 있습니다. <hr> 다음 ID를 제거하거나 변경하세요: <strong {r}>%(id)</strong>',
    QA_TEXT_UNDERLINE_WARNING: '밑줄 친 텍스트는 링크와 혼동될 수 있습니다. <code>&lt;strong&gt;</code><strong>강조</strong><code>&lt;/strong&gt;</code> 또는 <code>&lt;em&gt;</code><em>강조</em><code>&lt;/em&gt;</code>와 같은 다른 스타일을 사용하는 것을 고려하세요.',
    QA_SUBSCRIPT_WARNING: '아래 첨자 및 위 첨자 서식 옵션은 인쇄 규칙이나 표준에 따라 텍스트의 위치를 변경할 때만 사용해야 합니다. 프레젠테이션이나 외관을 위한 용도로만 <strong>사용해서는 안 됩니다. 문장 전체에 서식을 지정하면 가독성 문제가 발생할 수 있습니다. 적절한 사용 사례로는 지수 표시, 4번째 대신 4<sup>th</sup>와 같은 서수 표시, 화학식(예: H<sub>2</sub>O) 등이 있습니다.',
    TABLES_MISSING_HEADINGS: '표 헤더가 누락되었습니다! 접근 가능한 표에는 머리글 셀과 데이터 셀의 관계를 정의하는 HTML 마크업이 필요합니다. 이 정보는 보조 기술을 사용하는 사람들에게 컨텍스트를 제공합니다. 표는 표 형식의 데이터에만 사용해야 합니다. <hr> <a href="https://www.w3.org/WAI/tutorials/tables/">액세스 가능한 표에 대해 자세히 알아보기.</a>',
    TABLES_SEMANTIC_HEADING: '제목 2 또는 제목 3과 같은 시맨틱 제목은 콘텐츠 섹션에만 사용해야 하며, HTML 표에는 <strong>이 아닌</strong>을 사용해야 합니다. 대신 <code>&lt;th&gt;</code> 요소를 사용하여 표 제목을 표시하세요. <hr> <a href="https://www.w3.org/WAI/tutorials/tables/">액세스 가능한 표에 대해 자세히 알아보기.</a>',
    TABLES_EMPTY_HEADING: '빈 테이블 헤더가 발견되었습니다! 테이블 헤더는 비어 있으면 안 됩니다. 행 및/또는 열 머리글을 지정하여 관계를 전달하는 것이 중요합니다. 이 정보는 보조 기술을 사용하는 사람들에게 맥락을 제공합니다. 표는 표 형식의 데이터에만 사용해야 한다는 점에 유의하세요. <hr> <a href="https://www.w3.org/WAI/tutorials/tables/">액세스 가능한 테이블에 대해 자세히 알아보기.</a>',
    CONTRAST_ERROR: '이 텍스트는 배경과 대비가 충분하지 않습니다. 대비 비율은 일반 텍스트의 경우 4.5:1 이상, 큰 텍스트의 경우 3:1 이상이어야 합니다. <hr> 다음 텍스트의 대비 비율은 <strong {r}>%(cratio)</strong>입니다: <strong {r}>%(sanitizedText)</strong>',
    CONTRAST_WARNING: '이 텍스트의 대비를 알 수 없으므로 수동으로 검토해야 합니다. 텍스트와 배경의 색상이 강하게 대비되는지 확인합니다. 대비 비율은 일반 텍스트의 경우 4.5:1 이상, 큰 텍스트의 경우 3:1 이상이어야 합니다. <hr> <strong>검토해 주세요:</strong> %(sanitizedText)',
    CONTRAST_INPUT_ERROR: '이 입력 내의 텍스트는 배경과 대비가 충분하지 않습니다. 대비 비율은 일반 텍스트의 경우 4.5:1 이상, 큰 텍스트의 경우 3:1 이상이어야 합니다. <hr> 대비 비율: <strong {r}>%(cratio)</strong>',
  },
};

export { ko as default };
