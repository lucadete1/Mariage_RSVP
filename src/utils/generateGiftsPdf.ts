import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { GIFTS, COUPLE } from '../constants/appConstants';

export function generateGiftsPdf() {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(`Liste des cadeaux ${COUPLE.left} & ${COUPLE.right}`, 14, 22);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Merci pour votre amour et votre soutien, que Dieu vous bénisse !', 14, 30);
  
  // Table data - only columns: N°, Désignation, Qté
  const tableData = GIFTS.map((gift) => {
    const [num, desc, qty] = gift;
    return [num, desc, qty === '—' ? '-' : qty];
  });
  
  autoTable(doc, {
    startY: 35,
    head: [['N°', 'Désignation', 'Qté']],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: [201, 169, 110], // gold color
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 10,
    },
    bodyStyles: {
      fontSize: 9,
    },
    columnStyles: {
      0: { cellWidth: 15, halign: 'center' },
      1: { cellWidth: 'auto' },
      2: { cellWidth: 20, halign: 'center' },
    },
    margin: { left: 14, right: 14 },
  });
  
  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(`Page ${i} sur ${pageCount}`, 105, 290, { align: 'center' });
  }
  
  doc.save(`Liste_cadeaux_${COUPLE.left}_${COUPLE.right}.pdf`);
}