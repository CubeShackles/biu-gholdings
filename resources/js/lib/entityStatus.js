export const entityStatusLabels = {
    operating: { en: 'Operating', pt: 'Em Operação' },
    formation: { en: 'Formation Stage', pt: 'Fase de Constituição' },
    groupProduct: { en: 'Group Platform', pt: 'Plataforma do Grupo' },
};

export function getEntityStatusLabel(status, locale = 'en') {
    const lang = locale === 'pt' ? 'pt' : 'en';

    return entityStatusLabels[status]?.[lang] ?? status;
}
