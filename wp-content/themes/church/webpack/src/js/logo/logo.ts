declare global {
    interface Window {
        wp: {
            media: (options: any) => any;
        };
    }
}

export class MediaUploader {
    private uploadButton: HTMLElement | null;
    private imageField: HTMLInputElement | null;
    private logoPreview: HTMLImageElement | null;

    constructor() {
        this.uploadButton = document.getElementById('upload-btn');
        this.imageField = document.getElementById('image_url') as HTMLInputElement;
        this.logoPreview = document.getElementById('logo-preview') as HTMLImageElement;

        this.init();
    }

    private init(): void {
        if (this.uploadButton) {
            this.uploadButton.addEventListener('click', (e: Event) => this.onClickUploadButton(e));
        }
    }

    private onClickUploadButton(e: Event): void {
        e.preventDefault();

        const mediaUploader = window.wp.media({
            title: 'Wybierz Logo Strony',
            button: {
                text: 'Użyj tego obrazu'
            },
            multiple: false
        });

        mediaUploader.on('select', () => this.onSelectMedia(mediaUploader));
        mediaUploader.open();
    }

    private onSelectMedia(mediaUploader: any): void {
        const attachment = mediaUploader.state().get('selection').first().toJSON();
        if (this.imageField) {
            this.imageField.value = attachment.url; 
        }
        if (this.logoPreview) {
            this.logoPreview.src = attachment.url;
        }
    }
    
}
