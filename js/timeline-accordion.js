/**
 * Acordeão da linha do tempo e botão do mapa de origem (index).
 */
(function () {
    'use strict';

    var MAP_URL =
        'https://www.google.com/maps/@-12.5594191,-55.7231454,5827m/data=!3m1!1e3?entry=ttu';

    function setTriggersExpanded(stepId, expanded) {
        document.querySelectorAll('[data-accordion-step]').forEach(function (trigger) {
            var isThis = trigger.getAttribute('data-accordion-step') === stepId;
            trigger.setAttribute('aria-expanded', expanded && isThis ? 'true' : 'false');
        });
    }

    function toggleAccordion(stepId) {
        var content = document.getElementById('content-' + stepId);
        var chevron = document.getElementById('chevron-' + stepId);
        if (!content || !chevron) return;

        if (content.classList.contains('open')) {
            content.classList.remove('open');
            chevron.classList.remove('open');
            setTriggersExpanded(stepId, false);
            return;
        }

        document.querySelectorAll('.accordion-content').forEach(function (el) {
            el.classList.remove('open');
        });
        document.querySelectorAll('.chevron').forEach(function (el) {
            el.classList.remove('open');
        });

        content.classList.add('open');
        chevron.classList.add('open');
        setTriggersExpanded(stepId, true);
    }

    function onTriggerKeydown(event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        var step = event.currentTarget.getAttribute('data-accordion-step');
        if (step) toggleAccordion(step);
    }

    function init() {
        document.querySelectorAll('[data-accordion-step]').forEach(function (el) {
            el.addEventListener('click', function () {
                var step = el.getAttribute('data-accordion-step');
                if (step) toggleAccordion(step);
            });
            el.addEventListener('keydown', onTriggerKeydown);
        });

        var mapBtn = document.getElementById('openOriginMapBtn');
        if (mapBtn) {
            mapBtn.addEventListener('click', function () {
                window.open(MAP_URL, '_blank', 'noopener,noreferrer');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
