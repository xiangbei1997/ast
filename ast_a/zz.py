# import json
# test = {'caption':"\uD83D\uDE05\uD83D\uDE25\uD83D\uDC76\uD83D\uDE03"}
# tt = json.dumps(test)
# dd = json.loads(tt)
# print(dd)
hh = """mc = "WM_CONFIG",
            Fa = "WM_TID",
            ra = "WM_DID",
            nc = "WM_DIV",
            nb = "WM_NI",
            oc = "WM_NIKE",
            y = "NUMBER",
            t = "STRING",
            Z = "HEX",
            z = "BOOLEAN",
            G = "ARRAY",
            Ib = "CAT_CANVAS",
            Za = "CAT_FONTS",
            Jb = "CAT_WEBGL","""
hh = hh.replace('=', ':')
hh = hh.replace(' ', '')
hh = hh.replace('\n', '')
print(hh)
