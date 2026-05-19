export const entityStatusLabels = {
    operating: { en: 'Operating', pt: 'Em Operação' },
    formation: { en: 'Formation Stage', pt: 'Fase de Constituição' },
    internalProduct: { en: 'Internal Product', pt: 'Produto Interno' },
};

export function getEntityStatusLabel(status, locale = 'en') {
    const lang = locale === 'pt' ? 'pt' : 'en';

    return entityStatusLabels[status]?.[lang] ?? status;
}
