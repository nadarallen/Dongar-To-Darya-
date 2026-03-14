import os

src = r"C:\Users\Allen\.gemini\antigravity\brain\add53b98-61d2-4776-b684-91908fdbc936\global_reach_map_v2_1773411260279.png"
dst = r"d:\my study\Project\Sushant\Dongar-To-Darya-\public\images\global_map_v2.png"

try:
    with open(src, "rb") as f_src:
        data = f_src.read()
        
    with open(dst, "wb") as f_dst:
        f_dst.write(data)
        
    print(f"Success! Copied {len(data)} bytes to {dst}.")
except Exception as e:
    print(f"Error occurred: {e}")
