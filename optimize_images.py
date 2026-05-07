import os
from PIL import Image

def compress_images(directories):
    total_saved = 0
    for directory in directories:
        if not os.path.exists(directory):
            continue
            
        # Get files only in this directory (no recursion to avoid double processing)
        files = [os.path.join(directory, f) for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
            
        for filepath in files:
            if not filepath.lower().endswith(('.png', '.jpg', '.jpeg')):
                continue
                
            original_size = os.path.getsize(filepath)
            
            try:
                img = Image.open(filepath)
                
                # Resize if it's too large (over 1200px)
                max_dim = 1200
                if img.width > max_dim or img.height > max_dim:
                    img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                
                # Convert to RGB if saving as JPEG
                is_jpeg = filepath.lower().endswith(('.jpg', '.jpeg'))
                if is_jpeg and img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                
                if is_jpeg:
                    img.save(filepath, format="JPEG", optimize=True, quality=75)
                else:
                    img.save(filepath, format="PNG", optimize=True)
                    
                new_size = os.path.getsize(filepath)
                saved = original_size - new_size
                if saved > 0:
                    total_saved += saved
                print(f"Processed {filepath}: {original_size//1024}KB -> {new_size//1024}KB")
            except Exception as e:
                print(f"Failed to compress {filepath}: {e}")
                
    print(f"\nTotal space saved: {total_saved / (1024*1024):.2f} MB")

compress_images(["public/screenshots", "public"])
