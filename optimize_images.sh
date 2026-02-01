#!/bin/bash
cd src/assets/images/renovations
mkdir -p optimized
for img in *.{jpeg,jpg,png,JPG,JPEG,PNG}; do
    if [ -f "$img" ]; then
        filename=$(basename -- "$img")
        extension="${filename##*.}"
        filename="${filename%.*}"
        echo "Converting $img..."
        convert "$img" -resize 1200x -quality 85 "optimized/$filename.webp"
    fi
done
mv optimized/*.webp .
rm -rf optimized
rm *.{jpeg,jpg,png,JPG,JPEG,PNG}
