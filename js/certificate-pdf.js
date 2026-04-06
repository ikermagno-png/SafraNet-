/**
 * Geração do certificado em PDF (jsPDF) — página principal.
 */
(function () {
    'use strict';

    function buildCertificate(doc) {
        var primaryGreen = [30, 58, 31];
        var accentGreen = [74, 222, 128];
        var textDark = [50, 50, 50];
        var textLight = [100, 100, 100];
        var now = new Date();

        doc.setFillColor(primaryGreen[0], primaryGreen[1], primaryGreen[2]);
        doc.rect(0, 0, 210, 45, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(28);
        doc.setFont('helvetica', 'bold');
        doc.text('SAFRANET', 105, 22, { align: 'center' });

        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('CERTIFICADO DE AUTENTICIDADE BLOCKCHAIN', 105, 32, { align: 'center' });

        doc.setTextColor(textDark[0], textDark[1], textDark[2]);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('Detalhes do Produto', 20, 65);

        doc.setDrawColor(200, 200, 200);
        doc.line(20, 70, 190, 70);

        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Produto:', 20, 85);
        doc.setFont('helvetica', 'normal');
        doc.text('Picanha Premium', 50, 85);

        doc.setFont('helvetica', 'bold');
        doc.text('Lote:', 20, 95);
        doc.setFont('helvetica', 'normal');
        doc.text('#RZ-2026-MT042', 50, 95);

        doc.setFont('helvetica', 'bold');
        doc.text('Origem:', 20, 105);
        doc.setFont('helvetica', 'normal');
        doc.text('Fazenda Sol Nascente, Sorriso - Mato Grosso', 50, 105);

        doc.setFont('helvetica', 'bold');
        doc.text('Emissão:', 20, 115);
        doc.setFont('helvetica', 'normal');
        doc.text(
            now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR'),
            50,
            115
        );

        doc.setFillColor(245, 250, 247);
        doc.rect(20, 135, 170, 40, 'F');
        doc.setDrawColor(accentGreen[0], accentGreen[1], accentGreen[2]);
        doc.setLineWidth(0.5);
        doc.rect(20, 135, 170, 40, 'S');

        doc.setFontSize(10);
        doc.setTextColor(textLight[0], textLight[1], textLight[2]);
        doc.text('BLOCKCHAIN TX HASH (ERC-721 SafraProof):', 25, 148);

        doc.setFontSize(12);
        doc.setFont('courier', 'bold');
        doc.setTextColor(21, 128, 61);
        doc.text('0x8a9b34772c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r', 25, 160);

        doc.setTextColor(textDark[0], textDark[1], textDark[2]);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('STATUS: VERIFICADO E IMUTÁVEL', 105, 200, { align: 'center' });

        doc.setFillColor(245, 248, 255);
        doc.rect(20, 220, 170, 45, 'F');
        doc.setDrawColor(100, 150, 250);
        doc.setLineWidth(0.5);
        doc.rect(20, 220, 170, 45, 'S');

        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(textDark[0], textDark[1], textDark[2]);
        doc.text('ASSINATURA DIGITAL QUALIFICADA (ICP-Brasil)', 25, 230);

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.text('Assinado digitalmente por: SAFRANET TECNOLOGIA AGRICOLA S.A', 25, 238);
        doc.text(
            'Data e Hora: ' +
                now.toLocaleDateString('pt-BR') +
                ' ' +
                now.toLocaleTimeString('pt-BR') +
                ' (BRT)',
            25,
            244
        );
        doc.text('Chave de Verificação Pública: 3F2504E0-4F89-11D3-9A0C-0305E82C3301', 25, 250);

        doc.setFont('courier', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(textLight[0], textLight[1], textLight[2]);
        doc.text(
            'Hash do Documento: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
            25,
            258
        );

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.text('SafraNet Tecnologia Agrícola © 2026 - Rastreabilidade Garantida', 105, 280, {
            align: 'center',
        });
        doc.text('Verifique a autenticidade deste documento em safranet.com.br/verify', 105, 285, {
            align: 'center',
        });
    }

    function init() {
        var btn = document.getElementById('downloadBtn');
        if (!btn) return;

        btn.addEventListener('click', function () {
            var lib = window.jspdf;
            if (!lib || typeof lib.jsPDF !== 'function') {
                console.error('jsPDF não está disponível.');
                return;
            }
            var JsPDF = lib.jsPDF;
            var doc = new JsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
            });
            buildCertificate(doc);
            doc.save('Certificado_SafraNet_RZ2026.pdf');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
