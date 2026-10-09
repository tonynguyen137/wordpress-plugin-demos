import { store } from '@wordpress/interactivity';

let activeTrigger = null;

store('twyn/modal', {
	actions: {
		open(event) {
			const trigger = event.currentTarget;
			const modalId = trigger.dataset.twynModalId;

			if (!modalId) {
				return;
			}

			const dialog = document.getElementById(`twyn-modal-${modalId}`);

			if (!(dialog instanceof HTMLDialogElement)) {
				return;
			}

			activeTrigger = trigger;
			dialog.showModal();
			document.documentElement.classList.add('twyn-modal-open');
		},

		close(event) {
			const dialog = event.currentTarget.closest('dialog');

			if (!(dialog instanceof HTMLDialogElement)) {
				return;
			}

			dialog.close();
		},

		closeOnBackdrop(event) {
			if (event.target !== event.currentTarget) {
				return;
			}

			event.currentTarget.close();
		},

		restoreFocus() {
			document.documentElement.classList.remove('twyn-modal-open');

			activeTrigger?.focus();
			activeTrigger = null;
		},
	},
});
