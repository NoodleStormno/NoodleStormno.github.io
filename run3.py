import re

with open('E:\\NoodleStorm\\src\\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace game.title inside JSX
content = content.replace('alt={game.title}', 'alt={typeof game.title === \'string\' ? game.title : game.title[lang]}')
content = content.replace('>{game.title}</h3>', '>{typeof game.title === \'string\' ? game.title : game.title[lang]}</h3>')

with open('E:\\NoodleStorm\\src\\App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced titles")
