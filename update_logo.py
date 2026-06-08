from PIL import Image, ImageDraw

try:
    # Open the banner
    banner = Image.open('/home/rbi/Desktop/OmEdu_LP2/src/assets/partner_universities.png').convert("RGBA")
    
    # Open the new logo
    logo = Image.open('/home/rbi/Desktop/OmEdu_LP2/public/AlteUniversityLogo.png').convert("RGBA")
    
    banner_w, banner_h = banner.size
    
    bg_color = (245, 213, 218, 255) # #f5d5da in RGBA
    draw = ImageDraw.Draw(banner)
    
    # Let's see the dimensions to be safe. 
    # If width is not 1024, adjust the percentages.
    w_quarter = banner_w // 4
    x_start = w_quarter * 3
    y_start = int(banner_h * 0.3)
    
    draw.rectangle([x_start, y_start, banner_w, banner_h], fill=bg_color)
    
    # Use ANTIALIAS or LANCZOS
    resample_filter = getattr(Image, 'Resampling', Image).LANCZOS
    
    # Resize the new logo to fit
    max_w = w_quarter - 40
    max_h = banner_h - y_start - 20
    
    logo.thumbnail((max_w, max_h), resample_filter)
    
    # Calculate position to paste
    logo_w, logo_h = logo.size
    paste_x = x_start + (w_quarter - logo_w) // 2
    paste_y = y_start + (banner_h - y_start - logo_h) // 2
    
    # Paste using alpha channel as mask
    banner.paste(logo, (paste_x, paste_y), logo)
    
    banner.save('/home/rbi/Desktop/OmEdu_LP2/src/assets/partner_universities.png')
    print("Image updated successfully.")
except Exception as e:
    print("Error:", e)
