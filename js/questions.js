//creating an array and passing the number, questions, options and answers
let questions =[
    {
        numb: 1,
        question: "HTML stands for HyperText __________ Language.",
        answer: "Markup",
        options: [
        "Mark-up",
        "Marker",
        "Markup",
        "Marking",

        ]
      
    },
    {
        numb: 2,
        question: "A markup language is a set of interpretation to text that describes how it is to be structured, laid out or formatted.",
        answer: "True",
        options: [
        "True",
        "False",
        "Maybe True",
        "Maybe False",

        ]
      
    },
    {
        numb: 3,
        question: " Texts that are enclosed on a <title> tag are all displayed in which part of the browser?",
        answer: "Title Bar",
        options: [
        "Title Bar",
        "Tab",
        "Menu Bar",
        "Tool Bar",

        ]
      
    },

    {
        numb: 4,
        question: "__________ is software that displays web pages and allows you to interact with text, images, music, video and other resources found on a website on the World Wide Web.",
        answer: "Web Browser",
        options: [
        "Device Driver",
        "Web Browser",
        "Operating System",
        "Computer Aided Instruction",

        ]
      
    },
    {
        numb: 5,
        question: "This is where you could create an HTML document.",
        answer: "Notepad",
        options: [
        "VBA",
        "VisiCalc",
        "MS Word",
        "Notepad",

        ]
      
    },
    {
        numb: 6,
        question: "These are the basic units or building blocks of an HTML file.",
        answer: "Tag",
        options: [
        "Tag",
        "HTTP",
        "Value",
        "Attribute",

        ]
      
    },
    {
        numb: 7,
        question: "Tags that can stand alone are called…",
        answer: "Empty Tag",
        options: [
        "Empty Tag",
        "Markup Tag",
        "Container Tag",
        "Standalone Tag",

        ]
      
    },
    {
        numb: 8,
        question: "Tags that cannot stand alone are called…",
        answer: "Container Tag",
        options: [
        "Empty Tag",
        "Markup Tag",
        "Container Tag",
        "Standalone Tag",    

        ]
      
    },
    {
        numb: 9,
        question: "__________ are used to provide additional information about the tag and go in name-value pairs separated by an equal sign =",
        answer: "Attribute",
        options: [
         "Tag",
         "HTTP",
         "Value",
         "Attribute",

        ]
      
    },
    {
        numb: 10,
        question: "__________ are assigned property to an attribute.",
        answer: "Value",
        options: [
         "Tag",
         "HTTP",
         "Value",
         "Attribute"

        ]
      
    },
    {
        numb: 11,
        question: "HTML files are divided into 2 parts: the head and the __________.",
        answer: "Body",
        options: [
        "Attribute",
        "Body",
        "Title",
        "HTML",

        ]
      
    },
    {
        numb: 12,
        question: "Everything that appears on your webpage may it be texts, images, videos and others should then be put on the body which is enclosed in…",
        answer: "Body",
        options: [
        "Head",
        "Title",
        "Body",
        "Html",

        ]
      
    },
    {
        numb: 13,
        question: "__________ tag inside the head tag is used to denote the title of the webpage and display the title of the webpage on the title bar.",
        answer: "Title",
        options: [
        "Head",
        "Title",
        "Body",
        "Html",

        ]
      
    },
    {
        numb: 14,
        question: "This attribute can be used under the declaration of the <body> tag if you want to add a background image on the web page.",
        answer: "Background",
        options: [
        "Background",
        "Bgcolor",
        "Text",
        "Link",

        ]
      
    },
    {
        numb: 15,
        question: "This attribute can be used under the declaration of the <body> tag if you want to customize the background color of your webpage.",
        answer: "Bgcolor",
        options: [
        "Background",
        "Bgcolor",
        "Text",
        "Link",

        ]
      
    },
    {
        numb: 16,
        question: "This attribute can be used under the declaration of the <body> tag if you want to change the color of all the hyperlinks in the webpage",
        answer: "Text",
        options: [
        "Background",
        "Bgcolor",
        "Text",
        "Link",

        ]
      
    },
    {
        numb: 17,
        question: "This attribute can be used under the declaration of the <body> tag if you want to change the color of the hyperlinks in the webpage.",
        answer: "Link",
        options: [
        "Background",
        "Bgcolor",
        "Text",
        "Link",

        ]
      
    },
    {
        numb: 18,
        question: "This attribute indicates the color of the visited hyperlinks in the web page.",
        answer: "Vlink",
        options: [
        "Link",
        "Alink",
        "Vlink",
        "Xlink",

        ]
      
    },
    {
        numb: 19,
        question: "This attribute indicates the color of the active hyperlinks (when clicked) in the web page.",
        answer: "Alink",
        options: [
        "Link",
        "Alink",
        "Vlink",
        "Xlink",
        ]
      
    },
    {
        numb: 20,
        question: "Headings contains ____ levels.",
        answer: "6",
        options: [
        "2",
        "4",
        "6",
        "8",

        ]
      
    },
    {
        numb: 21,
        question: "Which among the heading levels got the smallest size?",
        answer: "H6",
        options: [
        "H1",
        "H3",
        "H5",
        "H6",

        ]
      
    },
    {
        numb: 22,
        question: "Which among the heading levels got the biggest size?",
        answer: "H1",
        options: [
        "H1",
        "H3",
        "H5",
        "H6",

        ]
      
    },
    {
        numb: 23,
        question: "This attribute indicates the alignment of the text.",
        answer: "Align",
        options: [
        "Align",
        "Left",
        "Center",
        "Right",

        ]
      
    },
    {
        numb: 24,
        question: "This tag is used to create paragraphs.",
        answer: "P",
        options: [
        "Hr",
        "P",
        "Ol",
        "Br",

        ]
      
    },
    {
        numb: 25,
        question: "You can place quotes in indented form and shrink them to be apart from the main paragraph by using the tag <blockquote>",
        answer: "True",
        options: [
        "True",
        "False",
    

        ]
      
    },
    {
        numb: 26,
        question: "This tag creates a line break or a new line.",
        answer: "Br",
        options: [
        "Hr",
        "P",
        "Ol",
        "Br",

        ]
      
    },
    {
        numb: 27,
        question: "<br> tag can stand alone. Therefore, <br> tag is a…",
        answer: "Empty Tag",
        options: [
        "Empty Tag",
        "Markup Tag",
        "Container Tag",
        "Standalone Tag",

        ]
      
    },
    {
        numb: 28,
        question: "This tag is used if you don’t want to combine the text on the next line.",
        answer: "Nobr",
        options: [
        "Hr",
        "Nobr",
        "Ol",
        "Br",

        ]
      
    },
    {
        numb: 29,
        question: "If you don’t want to include the shading of the horizontal rule, use the noshade attribute",
        answer: "True",
        options: [
        "True",
        "False",

        ]
      
    },
    {
        numb: 30,
        question: "This tag allows you to underline headlines or add a borderline.",
        answer: "Br",
        options: [
        "Hr",
        "Nobr",
        "Ol",
        "Br",

        ]
      
    },
    {
        numb: 31,
        question: "This tag is used to create an ordered list.",
        answer: "Ol",
        options: [
        "Hr",
        "Nobr",
        "Ol",
        "Br",

        ]
      
    },
    {
        numb: 32,
        question: "It is a requirement that you declare what type of tag in the <ol> tag for the declaration of the list?",
        answer: "Li",
        options: [
        "Dl",
        "Li",
        "Ul",
        "Dt",

        ]
      
    },
    {
        numb: 33,
        question: "This attribute is used to indicate the type of numbering to be used in the list (ex., 1, a, A, i, I)",
        answer: "Type",
        options: [
        "Type",
        "Start",
        "Id",
        "Class",

        ]
      
    },
    {
        numb: 34,
        question: "This attribute indicates the value or number of the first item in the list.",
        answer: "Start",
        options: [
        "Type",
        "Start",
        "Id",
        "Class",
        ]
      
    },
    {
        numb: 35,
        question: "This type of list enumerates each item in a bulleted form.",
        answer: "Ul",
        options: [
        "Dl",
        "Li",
        "Ul",
        "Dt",
    

        ]
      
    },
    {
        numb: 36,
        question: "Glossary list or definition list is an effective tool for making your own “definition of terms” list or glossary. The type of list uses the container tag _________.",
        answer: "Dl",
        options: [
        "Dl",
        "Li",
        "Ul",
        "Dt",

        ]
      
    },
    {
        numb: 37,
        question: "Definition list <dl> uses the empty tag  _____ for the item itself.",
        answer: "Dt",
        options: [
        "Dl",
        "Li",
        "Ul",
        "Dt",

        ]
      
    },
    {
        numb: 38,
        question: "Definition list <dl> uses the empty tag <dt> for the item itself and _____ for the definition of the item.",
        answer: "Dd",
        options: [
        "Dl",
        "Dd",
        "Ul",
        "Dt",

        ]
      
    },
    {
        numb: 39,
        question: "Comments can be used to put significant statements and/or remarks that you do not want to be displayed. Comment tag is a container tag that uses __________.",
        answer: "!-- --",
        options: [
        "Dl",
        "Dt",
        "!-- --",
        "Ul",

        ]
      
    },
    {
        numb: 40,
        question: "In formatting texts, _________ is the term used to define the appearance and arrangement of the characters that make up your text.",
        answer: "Topograpghy",
        options: [
        "Font",
        "Typestyle",
        "Topograpgh",
        "Typeface",

        ]
      
    },
    {
        numb: 41,
        question: "It is the actual appearance of the text.",
        answer: "Typeface",
        options: [
        "Font",
        "Typestyle",
        "Topograpgh",
        "Typeface",

        ]
      
    },
    {
        numb: 42,
        question: "This is the variations given to the text such as boldface, italic, regular, etc.",
        answer: "Typestyle",
        options: [
        "Font",
        "Typestyle",
        "Topograpgh",
        "Typeface",

        ]
      
    },
    {
        numb: 43,
        question: "What tag will be used to display this kind of text?",
        answer: "Strike",
        options: [
        "B",
        "I",
        "U",
        "Stike",

        ]
      
    },
    {
        numb: 44,
        question: "What tag will be used to display this kind of text?",
        answer: "I",
        options: [
        "B",
        "I",
        "U",
        "Stike",

        ]
      
    },
    {
        numb: 45,
        question: "What tag will be used to display this kind of text?",
        answer: "B",
        options: [
        "B",
        "I",
        "U",
        "Stike",

        ]
      
    },
    {
        numb: 46,
        question: "What tag will be used to display this kind of text?",
        answer: "U",
        options: [
        "B",
        "I",
        "U",
        "Stike",

        ]
      
    },
    {
        numb: 47,
        question: "___is the combination of the typeface and type style.",
        answer: "Font",
        options: [
        "Font",
        "Typestyle",
        "Topograpgh",
        "Typeface",
        ]
      
    },
    {
        numb: 48,
        question: "What tag will be used to add image on the web page?",
        answer: "Img",
        options: [
        "A",
        "Img",
        "Src",
        "Href",

        ]
      
    },
    {
        numb: 49,
        question: "What tag will be used to create a hyperlink?",
        answer: "A",
        options: [
        "A",
        "Img",
        "Src",
        "Href",

        ]
      
    },
    {
        numb: 50,
        question: "Href attribute stands for…",
        answer: "Hyperlink reference",
        options: [
        "Hyperlink referral",
        "Hyperlink",
        "Hyperlink reference",
        "Hyperlink referencing",

        ]
      
    },
];