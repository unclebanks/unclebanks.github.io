import { $all } from './utilities';

export function closeModal(modal) {
    modal.classList.remove('is-active');
    document.documentElement.classList.remove('is-clipped');
}

export function openModal(modal) {
    document.documentElement.classList.add('is-clipped');
    modal.classList.add('is-active');
}

export default () => {
    const $modals = $all('.modal');
    const $modalButtons = $all('.modal-button');
    const $modalCloses = $all('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

    if ($modalButtons && $modalButtons.length > 0) {
        $modalButtons.forEach(($el) => {
            $el.addEventListener('click', () => {
                const target = $el.dataset.target;
                const $target = document.getElementById(target);
                openModal($target);
            });
        });
    }

    if ($modalCloses && $modalCloses.length > 0) {
        $modalCloses.forEach(($el) => {
            $el.addEventListener('click', () => {
                $modals.forEach(closeModal);
            });
        });
    }
};
