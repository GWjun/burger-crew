import { memo, useId } from 'react';
import Image from 'next/image';
import { Controller, useFormContext } from 'react-hook-form';
import { X } from 'lucide-react';

import { FormData, MAX_IMAGE } from '#entities/review/model/ReviewFormData';
import { useImageUpload } from '#entities/review/hooks/useImageUpload';
import * as styles from './styles.css';

export const ImageElement = memo(
  ({ initialImages }: { initialImages?: string[] }) => {
    const uniqueId = useId();

    const {
      control,
      formState: { errors },
    } = useFormContext<FormData>();

    const { imageUrls, handleImageChange, handleRemoveImage } = useImageUpload(
      MAX_IMAGE,
      initialImages,
    );

    return (
      <Controller
        control={control}
        name="images"
        render={({ field }) => (
          <>
            <div className={styles.imagePreviewGrid}>
              {imageUrls.map((image, index) => (
                <div key={index} className={styles.imageBox}>
                  <Image
                    src={image}
                    fill
                    sizes="100px"
                    alt={`미리보기 ${index}`}
                    className={styles.image}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index, field)}
                    className={styles.deleteButton}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              {imageUrls.length < MAX_IMAGE && (
                <>
                  <label
                    htmlFor={`image-upload-input-${uniqueId}`}
                    className={styles.imageUploadBox}
                  >
                    <span>
                      {imageUrls.length} / {MAX_IMAGE}
                    </span>
                  </label>
                  <input
                    id={`image-upload-input-${uniqueId}`}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, field)}
                    style={{ display: 'none' }}
                  />
                </>
              )}
            </div>
            {errors.images && (
              <span className={styles.error}>{errors.images.message}</span>
            )}
          </>
        )}
      />
    );
  },
);

ImageElement.displayName = 'ImageElement';
