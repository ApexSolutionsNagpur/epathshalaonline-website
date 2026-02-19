import docx
import os

def extract_text(file_path):
    doc = docx.Document(file_path)
    fullText = []
    for para in doc.paragraphs:
        fullText.append(para.text)
    return '\n'.join(fullText)

file1 = r'd:/eTeach Project/playster-football/playster-football/WebContent/ePathshala_Online_Campaign_1.0.docx'
file2 = r'd:/eTeach Project/playster-football/playster-football/WebContent/ePathshala_Online_Campaign_2.0.docx'

with open('extracted_content.txt', 'w', encoding='utf-8') as f:
    f.write("--- FILE 1: ePathshala_Online_Campaign_1.0.docx ---\n")
    try:
        f.write(extract_text(file1))
    except Exception as e:
        f.write(f"Error reading file 1: {e}")

    f.write("\n\n--- FILE 2: ePathshala_Online_Campaign_2.0.docx ---\n")
    try:
        f.write(extract_text(file2))
    except Exception as e:
        f.write(f"Error reading file 2: {e}")
