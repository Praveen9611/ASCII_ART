// ASCII font patterns for different styles
const fonts = {
    standard: {
        'A': [
            "  ██  ",
            " ████ ",
            "██  ██",
            "██████",
            "██  ██",
            "██  ██"
        ],
        'B': [
            "██████",
            "██  ██",
            "██████",
            "██████",
            "██  ██",
            "██████"
        ],
        'C': [
            " █████",
            "██    ",
            "██    ",
            "██    ",
            "██    ",
            " █████"
        ],
        'D': [
            "██████",
            "██  ██",
            "██  ██",
            "██  ██",
            "██  ██",
            "██████"
        ],
        'E': [
            "██████",
            "██    ",
            "██████",
            "██████",
            "██    ",
            "██████"
        ],
        'F': [
            "██████",
            "██    ",
            "██████",
            "██████",
            "██    ",
            "██    "
        ],
        'G': [
            " █████",
            "██    ",
            "██ ███",
            "██  ██",
            "██  ██",
            " █████"
        ],
        'H': [
            "██  ██",
            "██  ██",
            "██████",
            "██████",
            "██  ██",
            "██  ██"
        ],
        'I': [
            "██████",
            "  ██  ",
            "  ██  ",
            "  ██  ",
            "  ██  ",
            "██████"
        ],
        'J': [
            "██████",
            "    ██",
            "    ██",
            "    ██",
            "██  ██",
            " █████"
        ],
        'K': [
            "██  ██",
            "██ ██ ",
            "████  ",
            "████  ",
            "██ ██ ",
            "██  ██"
        ],
        'L': [
            "██    ",
            "██    ",
            "██    ",
            "██    ",
            "██    ",
            "██████"
        ],
        'M': [
            "██  ██",
            "██████",
            "██████",
            "██  ██",
            "██  ██",
            "██  ██"
        ],
        'N': [
            "██  ██",
            "███ ██",
            "██████",
            "██ ███",
            "██  ██",
            "██  ██"
        ],
        'O': [
            " █████",
            "██  ██",
            "██  ██",
            "██  ██",
            "██  ██",
            " █████"
        ],
        'P': [
            "██████",
            "██  ██",
            "██████",
            "██    ",
            "██    ",
            "██    "
        ],
        'Q': [
            " █████",
            "██  ██",
            "██  ██",
            "██ ███",
            "██  ██",
            " ██████"
        ],
        'R': [
            "██████",
            "██  ██",
            "██████",
            "██ ██ ",
            "██  ██",
            "██  ██"
        ],
        'S': [
            " █████",
            "██    ",
            " █████",
            "    ██",
            "    ██",
            " █████"
        ],
        'T': [
            "██████",
            "  ██  ",
            "  ██  ",
            "  ██  ",
            "  ██  ",
            "  ██  "
        ],
        'U': [
            "██  ██",
            "██  ██",
            "██  ██",
            "██  ██",
            "██  ██",
            " █████"
        ],
        'V': [
            "██  ██",
            "██  ██",
            "██  ██",
            "██  ██",
            " ████ ",
            "  ██  "
        ],
        'W': [
            "██  ██",
            "██  ██",
            "██  ██",
            "██████",
            "██████",
            "██  ██"
        ],
        'X': [
            "██  ██",
            " ████ ",
            "  ██  ",
            "  ██  ",
            " ████ ",
            "██  ██"
        ],
        'Y': [
            "██  ██",
            "██  ██",
            " ████ ",
            "  ██  ",
            "  ██  ",
            "  ██  "
        ],
        'Z': [
            "██████",
            "   ██ ",
            "  ██  ",
            " ██   ",
            "██    ",
            "██████"
        ],
        ' ': [
            "      ",
            "      ",
            "      ",
            "      ",
            "      ",
            "      "
        ],
        '0': [
            " █████",
            "██  ██",
            "██ ███",
            "███ ██",
            "██  ██",
            " █████"
        ],
        '1': [
            "  ██  ",
            " ███  ",
            "  ██  ",
            "  ██  ",
            "  ██  ",
            "██████"
        ],
        '2': [
            " █████",
            "██  ██",
            "   ██ ",
            " ██   ",
            "██    ",
            "██████"
        ],
        '3': [
            " █████",
            "██  ██",
            "  ███ ",
            "    ██",
            "██  ██",
            " █████"
        ],
        '4': [
            "██  ██",
            "██  ██",
            "██████",
            "    ██",
            "    ██",
            "    ██"
        ],
        '5': [
            "██████",
            "██    ",
            "█████ ",
            "    ██",
            "██  ██",
            " █████"
        ],
        '6': [
            " █████",
            "██    ",
            "██████",
            "██  ██",
            "██  ██",
            " █████"
        ],
        '7': [
            "██████",
            "    ██",
            "   ██ ",
            "  ██  ",
            " ██   ",
            "██    "
        ],
        '8': [
            " █████",
            "██  ██",
            " █████",
            "██  ██",
            "██  ██",
            " █████"
        ],
        '9': [
            " █████",
            "██  ██",
            " ██████",
            "    ██",
            "██  ██",
            " █████"
        ]
    }
};

function generateAscii() {
    const text = document.getElementById('textInput').value.toUpperCase();
    const font = document.getElementById('fontSelect').value;
    const output = document.getElementById('asciiOutput');
    
    if (!text.trim()) {
        output.textContent = 'Please enter some text to convert!';
        return;
    }

    if (text.length > 20) {
        output.textContent = 'Please enter text with 20 characters or less!';
        return;
    }

    const asciiArt = textToAscii(text, font);
    output.textContent = asciiArt;
}

function textToAscii(text, fontStyle) {
    const currentFont = fonts[fontStyle] || fonts.standard;
    const lines = ['', '', '', '', '', ''];
    
    for (let char of text) {
        if (currentFont[char]) {
            const charLines = currentFont[char];
            for (let i = 0; i < 6; i++) {
                lines[i] += charLines[i] + ' ';
            }
        } else {
            // For unsupported characters, use space
            for (let i = 0; i < 6; i++) {
                lines[i] += '       ';
            }
        }
    }
    
    return lines.join('\n');
}

function setExample(text) {
    document.getElementById('textInput').value = text;
    generateAscii();
}

function copyToClipboard() {
    const output = document.getElementById('asciiOutput');
    const text = output.textContent;
    
    if (text && text !== 'Enter text above and click "Generate ASCII" to see the magic happen!' && text !== 'Please enter some text to convert!') {
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.querySelector('.copy-btn');
            const originalText = btn.textContent;
            btn.textContent = '✅ Copied!';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        }).catch(() => {
            alert('Failed to copy. Please select and copy manually.');
        });
    }
}

// Auto-generate on input
document.getElementById('textInput').addEventListener('input', () => {
    const text = document.getElementById('textInput').value;
    if (text.length > 0 && text.length <= 20) {
        generateAscii();
    }
});

// Generate on Enter key
document.getElementById('textInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateAscii();
    }
});

// Auto-generate on font change
document.getElementById('fontSelect').addEventListener('change', () => {
    const text = document.getElementById('textInput').value;
    if (text.trim()) {
        generateAscii();
    }
});
