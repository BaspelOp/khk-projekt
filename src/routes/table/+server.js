
import { json } from '@sveltejs/kit';
import { createReport } from 'docx-templates';
import fs from 'fs';

const povereniTemplate = fs.readFileSync('povereni.docx');

export async function POST(reqEvent) {
    const data = await reqEvent.request.json();
    data.datum = new Date(data.datum).toLocaleDateString();
    data.kontrolovaneObdobi = new Date(data.kontrolovaneObdobi).toLocaleDateString();
    console.log(data);
    
    const report = await createReport({
        template: povereniTemplate,
        data: data, 
    });

    return new Response(report, {
        headers: {
            'Content-Disposition': 'attachment; filename="report.docx"',
            'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }
    });
}