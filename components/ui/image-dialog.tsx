import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

interface ImageDialogProps {
  imageUrl: string;
  altText?: string;
  className?: string;
  enableDialog?: boolean;
}

export const ImageDialog: React.FC<ImageDialogProps> = ({ imageUrl, altText, className, enableDialog = true }) => {
  const alt = altText || 'Image';

  if (!enableDialog) {
    return (
      <div className={cn(
        "relative overflow-hidden rounded-lg shadow-md transition-opacity",
        !className && "h-48 w-full",
        className
      )}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
    );
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className={cn(
          "relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-opacity hover:opacity-90",
          !className && "h-48 w-full",
          className
        )}>
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-lg focus:outline-none">
          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className="absolute right-4 top-4 text-lg font-bold text-gray-500 transition-colors hover:text-gray-800 focus:outline-none"
            >
              ✕
            </button>
          </Dialog.Close>
          <div className="relative h-[60vh] w-full max-h-[90vh]">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="rounded-lg object-contain"
              sizes="100vw"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
