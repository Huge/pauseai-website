const pagefind_version = '1.0.4'
let wasm_bindgen
;(function () {
	const __exports = {}
	let script_src
	if (typeof document === 'undefined') {
		script_src = location.href
	} else {
		script_src = new URL('UNHANDLED', location.href).toString()
	}
	let wasm
	let cachedUint8Memory0 = null
	function getUint8Memory0() {
		if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
			cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer)
		}
		return cachedUint8Memory0
	}
	let WASM_VECTOR_LEN = 0
	function passArray8ToWasm0(arg, malloc) {
		const ptr = malloc(arg.length * 1)
		getUint8Memory0().set(arg, ptr / 1)
		WASM_VECTOR_LEN = arg.length
		return ptr
	}
	__exports.init_pagefind = function (metadata_bytes) {
		const ptr0 = passArray8ToWasm0(metadata_bytes, wasm.__wbindgen_malloc)
		const len0 = WASM_VECTOR_LEN
		const ret = wasm.init_pagefind(ptr0, len0)
		return ret
	}
	__exports.load_index_chunk = function (ptr, chunk_bytes) {
		const ptr0 = passArray8ToWasm0(chunk_bytes, wasm.__wbindgen_malloc)
		const len0 = WASM_VECTOR_LEN
		const ret = wasm.load_index_chunk(ptr, ptr0, len0)
		return ret
	}
	__exports.load_filter_chunk = function (ptr, chunk_bytes) {
		const ptr0 = passArray8ToWasm0(chunk_bytes, wasm.__wbindgen_malloc)
		const len0 = WASM_VECTOR_LEN
		const ret = wasm.load_filter_chunk(ptr, ptr0, len0)
		return ret
	}
	const cachedTextEncoder = new TextEncoder('utf-8')
	const encodeString =
		typeof cachedTextEncoder.encodeInto === 'function'
			? function (arg, view) {
					return cachedTextEncoder.encodeInto(arg, view)
				}
			: function (arg, view) {
					const buf = cachedTextEncoder.encode(arg)
					view.set(buf)
					return { read: arg.length, written: buf.length }
				}
	function passStringToWasm0(arg, malloc, realloc) {
		if (realloc === undefined) {
			const buf = cachedTextEncoder.encode(arg)
			const ptr = malloc(buf.length)
			getUint8Memory0()
				.subarray(ptr, ptr + buf.length)
				.set(buf)
			WASM_VECTOR_LEN = buf.length
			return ptr
		}
		let len = arg.length
		let ptr = malloc(len)
		const mem = getUint8Memory0()
		let offset = 0
		for (; offset < len; offset++) {
			const code = arg.charCodeAt(offset)
			if (code > 0x7f) break
			mem[ptr + offset] = code
		}
		if (offset !== len) {
			if (offset !== 0) {
				arg = arg.slice(offset)
			}
			ptr = realloc(ptr, len, (len = offset + arg.length * 3))
			const view = getUint8Memory0().subarray(ptr + offset, ptr + len)
			const ret = encodeString(arg, view)
			offset += ret.written
		}
		WASM_VECTOR_LEN = offset
		return ptr
	}
	__exports.add_synthetic_filter = function (ptr, filter) {
		const ptr0 = passStringToWasm0(filter, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
		const len0 = WASM_VECTOR_LEN
		const ret = wasm.add_synthetic_filter(ptr, ptr0, len0)
		return ret
	}
	let cachedInt32Memory0 = null
	function getInt32Memory0() {
		if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
			cachedInt32Memory0 = new Int32Array(wasm.memory.buffer)
		}
		return cachedInt32Memory0
	}
	const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true })
	cachedTextDecoder.decode()
	function getStringFromWasm0(ptr, len) {
		return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len))
	}
	__exports.request_indexes = function (ptr, query) {
		try {
			const retptr = wasm.__wbindgen_add_to_stack_pointer(-16)
			const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
			const len0 = WASM_VECTOR_LEN
			wasm.request_indexes(retptr, ptr, ptr0, len0)
			var r0 = getInt32Memory0()[retptr / 4 + 0]
			var r1 = getInt32Memory0()[retptr / 4 + 1]
			return getStringFromWasm0(r0, r1)
		} finally {
			wasm.__wbindgen_add_to_stack_pointer(16)
			wasm.__wbindgen_free(r0, r1)
		}
	}
	__exports.request_filter_indexes = function (ptr, filters) {
		try {
			const retptr = wasm.__wbindgen_add_to_stack_pointer(-16)
			const ptr0 = passStringToWasm0(filters, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
			const len0 = WASM_VECTOR_LEN
			wasm.request_filter_indexes(retptr, ptr, ptr0, len0)
			var r0 = getInt32Memory0()[retptr / 4 + 0]
			var r1 = getInt32Memory0()[retptr / 4 + 1]
			return getStringFromWasm0(r0, r1)
		} finally {
			wasm.__wbindgen_add_to_stack_pointer(16)
			wasm.__wbindgen_free(r0, r1)
		}
	}
	__exports.request_all_filter_indexes = function (ptr) {
		try {
			const retptr = wasm.__wbindgen_add_to_stack_pointer(-16)
			wasm.request_all_filter_indexes(retptr, ptr)
			var r0 = getInt32Memory0()[retptr / 4 + 0]
			var r1 = getInt32Memory0()[retptr / 4 + 1]
			return getStringFromWasm0(r0, r1)
		} finally {
			wasm.__wbindgen_add_to_stack_pointer(16)
			wasm.__wbindgen_free(r0, r1)
		}
	}
	__exports.filters = function (ptr) {
		try {
			const retptr = wasm.__wbindgen_add_to_stack_pointer(-16)
			wasm.filters(retptr, ptr)
			var r0 = getInt32Memory0()[retptr / 4 + 0]
			var r1 = getInt32Memory0()[retptr / 4 + 1]
			return getStringFromWasm0(r0, r1)
		} finally {
			wasm.__wbindgen_add_to_stack_pointer(16)
			wasm.__wbindgen_free(r0, r1)
		}
	}
	__exports.search = function (ptr, query, filter, sort, exact) {
		try {
			const retptr = wasm.__wbindgen_add_to_stack_pointer(-16)
			const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
			const len0 = WASM_VECTOR_LEN
			const ptr1 = passStringToWasm0(filter, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
			const len1 = WASM_VECTOR_LEN
			const ptr2 = passStringToWasm0(sort, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc)
			const len2 = WASM_VECTOR_LEN
			wasm.search(retptr, ptr, ptr0, len0, ptr1, len1, ptr2, len2, exact)
			var r0 = getInt32Memory0()[retptr / 4 + 0]
			var r1 = getInt32Memory0()[retptr / 4 + 1]
			return getStringFromWasm0(r0, r1)
		} finally {
			wasm.__wbindgen_add_to_stack_pointer(16)
			wasm.__wbindgen_free(r0, r1)
		}
	}
	async function load(module, imports) {
		if (typeof Response === 'function' && module instanceof Response) {
			if (typeof WebAssembly.instantiateStreaming === 'function') {
				try {
					return await WebAssembly.instantiateStreaming(module, imports)
				} catch (e) {
					if (module.headers.get('Content-Type') != 'application/wasm') {
						console.warn(
							'`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n',
							e
						)
					} else {
						throw e
					}
				}
			}
			const bytes = await module.arrayBuffer()
			return await WebAssembly.instantiate(bytes, imports)
		} else {
			const instance = await WebAssembly.instantiate(module, imports)
			if (instance instanceof WebAssembly.Instance) {
				return { instance, module }
			} else {
				return instance
			}
		}
	}
	function getImports() {
		const imports = {}
		imports.wbg = {}
		return imports
	}
	function initMemory(imports, maybe_memory) {}
	function finalizeInit(instance, module) {
		wasm = instance.exports
		init.__wbindgen_wasm_module = module
		cachedInt32Memory0 = null
		cachedUint8Memory0 = null
		return wasm
	}
	function initSync(module) {
		const imports = getImports()
		initMemory(imports)
		if (!(module instanceof WebAssembly.Module)) {
			module = new WebAssembly.Module(module)
		}
		const instance = new WebAssembly.Instance(module, imports)
		return finalizeInit(instance, module)
	}
	async function init(input) {
		if (typeof input === 'undefined') {
			input = script_src.replace(/\.js$/, '_bg.wasm')
		}
		const imports = getImports()
		if (
			typeof input === 'string' ||
			(typeof Request === 'function' && input instanceof Request) ||
			(typeof URL === 'function' && input instanceof URL)
		) {
			input = fetch(input)
		}
		initMemory(imports)
		const { instance, module } = await load(await input, imports)
		return finalizeInit(instance, module)
	}
	wasm_bindgen = Object.assign(init, { initSync }, __exports)
})()
var u8 = Uint8Array
var u16 = Uint16Array
var u32 = Uint32Array
var fleb = new u8([
	0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0
])
var fdeb = new u8([
	0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
	0, 0
])
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
var freb = function (eb, start) {
	var b = new u16(31)
	for (var i2 = 0; i2 < 31; ++i2) {
		b[i2] = start += 1 << eb[i2 - 1]
	}
	var r = new u32(b[30])
	for (var i2 = 1; i2 < 30; ++i2) {
		for (var j = b[i2]; j < b[i2 + 1]; ++j) {
			r[j] = ((j - b[i2]) << 5) | i2
		}
	}
	return [b, r]
}
var _a = freb(fleb, 2)
var fl = _a[0]
var revfl = _a[1]
;(fl[28] = 258), (revfl[258] = 28)
var _b = freb(fdeb, 0)
var fd = _b[0]
var revfd = _b[1]
var rev = new u16(32768)
for (i = 0; i < 32768; ++i) {
	x = ((i & 43690) >>> 1) | ((i & 21845) << 1)
	x = ((x & 52428) >>> 2) | ((x & 13107) << 2)
	x = ((x & 61680) >>> 4) | ((x & 3855) << 4)
	rev[i] = (((x & 65280) >>> 8) | ((x & 255) << 8)) >>> 1
}
var x
var i
var hMap = function (cd, mb, r) {
	var s = cd.length
	var i2 = 0
	var l = new u16(mb)
	for (; i2 < s; ++i2) {
		if (cd[i2]) ++l[cd[i2] - 1]
	}
	var le = new u16(mb)
	for (i2 = 0; i2 < mb; ++i2) {
		le[i2] = (le[i2 - 1] + l[i2 - 1]) << 1
	}
	var co
	if (r) {
		co = new u16(1 << mb)
		var rvb = 15 - mb
		for (i2 = 0; i2 < s; ++i2) {
			if (cd[i2]) {
				var sv = (i2 << 4) | cd[i2]
				var r_1 = mb - cd[i2]
				var v = le[cd[i2] - 1]++ << r_1
				for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
					co[rev[v] >>> rvb] = sv
				}
			}
		}
	} else {
		co = new u16(s)
		for (i2 = 0; i2 < s; ++i2) {
			if (cd[i2]) {
				co[i2] = rev[le[cd[i2] - 1]++] >>> (15 - cd[i2])
			}
		}
	}
	return co
}
var flt = new u8(288)
for (i = 0; i < 144; ++i) flt[i] = 8
var i
for (i = 144; i < 256; ++i) flt[i] = 9
var i
for (i = 256; i < 280; ++i) flt[i] = 7
var i
for (i = 280; i < 288; ++i) flt[i] = 8
var i
var fdt = new u8(32)
for (i = 0; i < 32; ++i) fdt[i] = 5
var i
var flrm = hMap(flt, 9, 1)
var fdrm = hMap(fdt, 5, 1)
var max = function (a) {
	var m = a[0]
	for (var i2 = 1; i2 < a.length; ++i2) {
		if (a[i2] > m) m = a[i2]
	}
	return m
}
var bits = function (d, p, m) {
	var o = (p / 8) | 0
	return ((d[o] | (d[o + 1] << 8)) >> (p & 7)) & m
}
var bits16 = function (d, p) {
	var o = (p / 8) | 0
	return (d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >> (p & 7)
}
var shft = function (p) {
	return ((p + 7) / 8) | 0
}
var slc = function (v, s, e) {
	if (s == null || s < 0) s = 0
	if (e == null || e > v.length) e = v.length
	var n = new (v.BYTES_PER_ELEMENT == 2 ? u16 : v.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e - s)
	n.set(v.subarray(s, e))
	return n
}
var ec = [
	'unexpected EOF',
	'invalid block type',
	'invalid length/literal',
	'invalid distance',
	'stream finished',
	'no stream handler',
	,
	'no callback',
	'invalid UTF-8 data',
	'extra field too long',
	'date not in range 1980-2099',
	'filename too long',
	'stream finishing',
	'invalid zip data'
]
var err = function (ind, msg, nt) {
	var e = new Error(msg || ec[ind])
	e.code = ind
	if (Error.captureStackTrace) Error.captureStackTrace(e, err)
	if (!nt) throw e
	return e
}
var inflt = function (dat, buf, st) {
	var sl = dat.length
	if (!sl || (st && st.f && !st.l)) return buf || new u8(0)
	var noBuf = !buf || st
	var noSt = !st || st.i
	if (!st) st = {}
	if (!buf) buf = new u8(sl * 3)
	var cbuf = function (l2) {
		var bl = buf.length
		if (l2 > bl) {
			var nbuf = new u8(Math.max(bl * 2, l2))
			nbuf.set(buf)
			buf = nbuf
		}
	}
	var final = st.f || 0,
		pos = st.p || 0,
		bt = st.b || 0,
		lm = st.l,
		dm = st.d,
		lbt = st.m,
		dbt = st.n
	var tbts = sl * 8
	do {
		if (!lm) {
			final = bits(dat, pos, 1)
			var type = bits(dat, pos + 1, 3)
			pos += 3
			if (!type) {
				var s = shft(pos) + 4,
					l = dat[s - 4] | (dat[s - 3] << 8),
					t = s + l
				if (t > sl) {
					if (noSt) err(0)
					break
				}
				if (noBuf) cbuf(bt + l)
				buf.set(dat.subarray(s, t), bt)
				;(st.b = bt += l), (st.p = pos = t * 8), (st.f = final)
				continue
			} else if (type == 1) (lm = flrm), (dm = fdrm), (lbt = 9), (dbt = 5)
			else if (type == 2) {
				var hLit = bits(dat, pos, 31) + 257,
					hcLen = bits(dat, pos + 10, 15) + 4
				var tl = hLit + bits(dat, pos + 5, 31) + 1
				pos += 14
				var ldt = new u8(tl)
				var clt = new u8(19)
				for (var i2 = 0; i2 < hcLen; ++i2) {
					clt[clim[i2]] = bits(dat, pos + i2 * 3, 7)
				}
				pos += hcLen * 3
				var clb = max(clt),
					clbmsk = (1 << clb) - 1
				var clm = hMap(clt, clb, 1)
				for (var i2 = 0; i2 < tl; ) {
					var r = clm[bits(dat, pos, clbmsk)]
					pos += r & 15
					var s = r >>> 4
					if (s < 16) {
						ldt[i2++] = s
					} else {
						var c = 0,
							n = 0
						if (s == 16) (n = 3 + bits(dat, pos, 3)), (pos += 2), (c = ldt[i2 - 1])
						else if (s == 17) (n = 3 + bits(dat, pos, 7)), (pos += 3)
						else if (s == 18) (n = 11 + bits(dat, pos, 127)), (pos += 7)
						while (n--) ldt[i2++] = c
					}
				}
				var lt = ldt.subarray(0, hLit),
					dt = ldt.subarray(hLit)
				lbt = max(lt)
				dbt = max(dt)
				lm = hMap(lt, lbt, 1)
				dm = hMap(dt, dbt, 1)
			} else err(1)
			if (pos > tbts) {
				if (noSt) err(0)
				break
			}
		}
		if (noBuf) cbuf(bt + 131072)
		var lms = (1 << lbt) - 1,
			dms = (1 << dbt) - 1
		var lpos = pos
		for (; ; lpos = pos) {
			var c = lm[bits16(dat, pos) & lms],
				sym = c >>> 4
			pos += c & 15
			if (pos > tbts) {
				if (noSt) err(0)
				break
			}
			if (!c) err(2)
			if (sym < 256) buf[bt++] = sym
			else if (sym == 256) {
				;(lpos = pos), (lm = null)
				break
			} else {
				var add = sym - 254
				if (sym > 264) {
					var i2 = sym - 257,
						b = fleb[i2]
					add = bits(dat, pos, (1 << b) - 1) + fl[i2]
					pos += b
				}
				var d = dm[bits16(dat, pos) & dms],
					dsym = d >>> 4
				if (!d) err(3)
				pos += d & 15
				var dt = fd[dsym]
				if (dsym > 3) {
					var b = fdeb[dsym]
					;(dt += bits16(dat, pos) & ((1 << b) - 1)), (pos += b)
				}
				if (pos > tbts) {
					if (noSt) err(0)
					break
				}
				if (noBuf) cbuf(bt + 131072)
				var end = bt + add
				for (; bt < end; bt += 4) {
					buf[bt] = buf[bt - dt]
					buf[bt + 1] = buf[bt + 1 - dt]
					buf[bt + 2] = buf[bt + 2 - dt]
					buf[bt + 3] = buf[bt + 3 - dt]
				}
				bt = end
			}
		}
		;(st.l = lm), (st.p = lpos), (st.b = bt), (st.f = final)
		if (lm) (final = 1), (st.m = lbt), (st.d = dm), (st.n = dbt)
	} while (!final)
	return bt == buf.length ? buf : slc(buf, 0, bt)
}
var et = new u8(0)
var gzs = function (d) {
	if (d[0] != 31 || d[1] != 139 || d[2] != 8) err(6, 'invalid gzip data')
	var flg = d[3]
	var st = 10
	if (flg & 4) st += d[10] | ((d[11] << 8) + 2)
	for (var zs = ((flg >> 3) & 1) + ((flg >> 4) & 1); zs > 0; zs -= !d[st++]);
	return st + (flg & 2)
}
var gzl = function (d) {
	var l = d.length
	return (d[l - 4] | (d[l - 3] << 8) | (d[l - 2] << 16) | (d[l - 1] << 24)) >>> 0
}
function gunzipSync(data, out) {
	return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)))
}
var td = typeof TextDecoder != 'undefined' && new TextDecoder()
var tds = 0
try {
	td.decode(et, { stream: true })
	tds = 1
} catch (e) {}
var gz_default = gunzipSync
var calculate_excerpt_region = (word_positions, excerpt_length) => {
	if (word_positions.length === 0) {
		return 0
	}
	let words = []
	for (const word of word_positions) {
		words[word.location] = words[word.location] || 0
		words[word.location] += word.balanced_score
	}
	if (words.length <= excerpt_length) {
		return 0
	}
	let densest = words.slice(0, excerpt_length).reduce((partialSum, a) => partialSum + a, 0)
	let working_sum = densest
	let densest_at = [0]
	for (let i2 = 0; i2 < words.length; i2++) {
		const boundary = i2 + excerpt_length
		working_sum += (words[boundary] ?? 0) - (words[i2] ?? 0)
		if (working_sum > densest) {
			densest = working_sum
			densest_at = [i2]
		} else if (working_sum === densest && densest_at[densest_at.length - 1] === i2 - 1) {
			densest_at.push(i2)
		}
	}
	let midpoint = densest_at[Math.floor(densest_at.length / 2)]
	return midpoint
}
var build_excerpt = (content, start, length, locations, not_before, not_from) => {
	let is_zws_delimited = content.includes('\u200B')
	let fragment_words = []
	if (is_zws_delimited) {
		fragment_words = content.split('\u200B')
	} else {
		fragment_words = content.split(/[\r\n\s]+/g)
	}
	for (let word of locations) {
		if (fragment_words[word]?.startsWith(`<mark>`)) {
			continue
		}
		fragment_words[word] = `<mark>${fragment_words[word]}</mark>`
	}
	let endcap = not_from ?? fragment_words.length
	let startcap = not_before ?? 0
	if (endcap - startcap < length) {
		length = endcap - startcap
	}
	if (start + length > endcap) {
		start = endcap - length
	}
	if (start < startcap) {
		start = startcap
	}
	return fragment_words
		.slice(start, start + length)
		.join(is_zws_delimited ? '' : ' ')
		.trim()
}
var calculate_sub_results = (fragment, desired_excerpt_length) => {
	const anchors = fragment.anchors
		.filter((a) => /h\d/i.test(a.element) && a.text?.length && /\S/.test(a.text))
		.sort((a, b) => a.location - b.location)
	const results = []
	let current_anchor_position = 0
	let current_anchor = {
		title: fragment.meta['title'],
		url: fragment.url,
		weighted_locations: [],
		locations: [],
		excerpt: ''
	}
	const add_result = (end_range) => {
		if (current_anchor.locations.length) {
			const relative_weighted_locations = current_anchor.weighted_locations.map((l) => {
				return {
					weight: l.weight,
					balanced_score: l.balanced_score,
					location: l.location - current_anchor_position
				}
			})
			const excerpt_start =
				calculate_excerpt_region(relative_weighted_locations, desired_excerpt_length) +
				current_anchor_position
			const excerpt_length = end_range
				? Math.min(end_range - excerpt_start, desired_excerpt_length)
				: desired_excerpt_length
			current_anchor.excerpt = build_excerpt(
				fragment.raw_content ?? '',
				excerpt_start,
				excerpt_length,
				current_anchor.locations,
				current_anchor_position,
				end_range
			)
			results.push(current_anchor)
		}
	}
	for (let word of fragment.weighted_locations) {
		if (!anchors.length || word.location < anchors[0].location) {
			current_anchor.weighted_locations.push(word)
			current_anchor.locations.push(word.location)
		} else {
			let next_anchor = anchors.shift()
			add_result(next_anchor.location)
			while (anchors.length && word.location >= anchors[0].location) {
				next_anchor = anchors.shift()
			}
			let anchored_url = fragment.url
			try {
				const url_is_fq = /^((https?:)?\/\/)/.test(anchored_url)
				if (url_is_fq) {
					let fq_url = new URL(anchored_url)
					fq_url.hash = next_anchor.id
					anchored_url = fq_url.toString()
				} else {
					if (!/^\//.test(anchored_url)) {
						anchored_url = `/${anchored_url}`
					}
					let fq_url = new URL(`https://example.com${anchored_url}`)
					fq_url.hash = next_anchor.id
					anchored_url = fq_url.toString().replace(/^https:\/\/example.com/, '')
				}
			} catch (e) {
				console.error(`Pagefind: Couldn't process ${anchored_url} for a search result`)
			}
			current_anchor_position = next_anchor.location
			current_anchor = {
				title: next_anchor.text,
				url: anchored_url,
				anchor: next_anchor,
				weighted_locations: [word],
				locations: [word.location],
				excerpt: ''
			}
		}
	}
	add_result(anchors[0]?.location)
	return results
}
var asyncSleep = async (ms = 100) => {
	return new Promise((r) => setTimeout(r, ms))
}
var PagefindInstance = class {
	constructor(opts = {}) {
		this.version = pagefind_version
		this.backend = wasm_bindgen
		this.decoder = new TextDecoder('utf-8')
		this.wasm = null
		this.basePath = opts.basePath || '/pagefind/'
		this.primary = opts.primary || false
		if (this.primary && !opts.basePath) {
			this.initPrimary()
		}
		if (/[^\/]$/.test(this.basePath)) {
			this.basePath = `${this.basePath}/`
		}
		if (window?.location?.origin && this.basePath.startsWith(window.location.origin)) {
			this.basePath = this.basePath.replace(window.location.origin, '')
		}
		this.baseUrl = opts.baseUrl || this.defaultBaseUrl()
		if (!/^(\/|https?:\/\/)/.test(this.baseUrl)) {
			this.baseUrl = `/${this.baseUrl}`
		}
		this.indexWeight = opts.indexWeight ?? 1
		this.excerptLength = opts.excerptLength ?? 30
		this.mergeFilter = opts.mergeFilter ?? {}
		this.highlightParam = opts.highlightParam ?? null
		this.loaded_chunks = {}
		this.loaded_filters = {}
		this.loaded_fragments = {}
		this.raw_ptr = null
		this.searchMeta = null
		this.languages = null
	}
	initPrimary() {
		let derivedBasePath = import.meta.url.match(/^(.*\/)pagefind.js.*$/)?.[1]
		if (derivedBasePath) {
			this.basePath = derivedBasePath
		} else {
			console.warn(
				[
					"Pagefind couldn't determine the base of the bundle from the import path. Falling back to the default.",
					'Set a basePath option when initialising Pagefind to ignore this message.'
				].join('\n')
			)
		}
	}
	defaultBaseUrl() {
		let default_base = this.basePath.match(/^(.*\/)_?pagefind/)?.[1]
		return default_base || '/'
	}
	async options(options2) {
		const opts = [
			'basePath',
			'baseUrl',
			'indexWeight',
			'excerptLength',
			'mergeFilter',
			'highlightParam'
		]
		for (const [k, v] of Object.entries(options2)) {
			if (k === 'mergeFilter') {
				let filters2 = this.stringifyFilters(v)
				let ptr = await this.getPtr()
				this.raw_ptr = this.backend.add_synthetic_filter(ptr, filters2)
			} else if (opts.includes(k)) {
				if (k === 'basePath' && typeof v === 'string') this.basePath = v
				if (k === 'baseUrl' && typeof v === 'string') this.baseUrl = v
				if (k === 'indexWeight' && typeof v === 'number') this.indexWeight = v
				if (k === 'excerptLength' && typeof v === 'number') this.excerptLength = v
				if (k === 'mergeFilter' && typeof v === 'object') this.mergeFilter = v
				if (k === 'highlightParam' && typeof v === 'string') this.highlightParam = v
			} else {
				console.warn(`Unknown Pagefind option ${k}. Allowed options: [${opts.join(', ')}]`)
			}
		}
	}
	decompress(data, file = 'unknown file') {
		if (this.decoder.decode(data.slice(0, 12)) === 'pagefind_dcd') {
			return data.slice(12)
		}
		data = gz_default(data)
		if (this.decoder.decode(data.slice(0, 12)) !== 'pagefind_dcd') {
			console.error(`Decompressing ${file} appears to have failed: Missing signature`)
			return data
		}
		return data.slice(12)
	}
	async init(language, opts) {
		await this.loadEntry()
		let index = this.findIndex(language)
		let lang_wasm = index.wasm ? index.wasm : 'unknown'
		let resources = [this.loadMeta(index.hash)]
		if (opts.load_wasm === true) {
			resources.push(this.loadWasm(lang_wasm))
		}
		await Promise.all(resources)
		this.raw_ptr = this.backend.init_pagefind(new Uint8Array(this.searchMeta))
		if (Object.keys(this.mergeFilter)?.length) {
			let filters2 = this.stringifyFilters(this.mergeFilter)
			let ptr = await this.getPtr()
			this.raw_ptr = this.backend.add_synthetic_filter(ptr, filters2)
		}
	}
	async loadEntry() {
		try {
			let entry_response = await fetch(`${this.basePath}pagefind-entry.json?ts=${Date.now()}`)
			let entry_json = await entry_response.json()
			this.languages = entry_json.languages
			if (entry_json.version !== this.version) {
				if (this.primary) {
					console.warn(
						[
							"Pagefind JS version doesn't match the version in your search index.",
							`Pagefind JS: ${this.version}. Pagefind index: ${entry_json.version}`,
							'If you upgraded Pagefind recently, you likely have a cached pagefind.js file.',
							'If you encounter any search errors, try clearing your cache.'
						].join('\n')
					)
				} else {
					console.warn(
						[
							'Merging a Pagefind index from a different version than the main Pagefind instance.',
							`Main Pagefind JS: ${this.version}. Merged index (${this.basePath}): ${entry_json.version}`,
							'If you encounter any search errors, make sure that both sites are running the same version of Pagefind.'
						].join('\n')
					)
				}
			}
		} catch (e) {
			console.error(`Failed to load Pagefind metadata:
${e?.toString()}`)
			throw new Error('Failed to load Pagefind metadata')
		}
	}
	findIndex(language) {
		if (this.languages) {
			let index = this.languages[language]
			if (index) return index
			index = this.languages[language.split('-')[0]]
			if (index) return index
			let topLang = Object.values(this.languages).sort((a, b) => b.page_count - a.page_count)
			if (topLang[0]) return topLang[0]
		}
		throw new Error('Pagefind Error: No language indexes found.')
	}
	async loadMeta(index) {
		try {
			let compressed_resp = await fetch(`${this.basePath}pagefind.${index}.pf_meta`)
			let compressed_meta = await compressed_resp.arrayBuffer()
			this.searchMeta = this.decompress(new Uint8Array(compressed_meta), 'Pagefind metadata')
		} catch (e) {
			console.error(`Failed to load the meta index:
${e?.toString()}`)
		}
	}
	async loadWasm(language) {
		try {
			const wasm_url = `${this.basePath}wasm.${language}.pagefind`
			let compressed_resp = await fetch(wasm_url)
			let compressed_wasm = await compressed_resp.arrayBuffer()
			const final_wasm = this.decompress(new Uint8Array(compressed_wasm), 'Pagefind WebAssembly')
			if (!final_wasm) {
				throw new Error('No WASM after decompression')
			}
			this.wasm = await this.backend(final_wasm)
		} catch (e) {
			console.error(`Failed to load the Pagefind WASM:
${e?.toString()}`)
			throw new Error(`Failed to load the Pagefind WASM:
${e?.toString()}`)
		}
	}
	async _loadGenericChunk(url, method) {
		try {
			let compressed_resp = await fetch(url)
			let compressed_chunk = await compressed_resp.arrayBuffer()
			let chunk = this.decompress(new Uint8Array(compressed_chunk), url)
			let ptr = await this.getPtr()
			this.raw_ptr = this.backend[method](ptr, chunk)
		} catch (e) {
			console.error(`Failed to load the index chunk ${url}:
${e?.toString()}`)
		}
	}
	async loadChunk(hash) {
		if (!this.loaded_chunks[hash]) {
			const url = `${this.basePath}index/${hash}.pf_index`
			this.loaded_chunks[hash] = this._loadGenericChunk(url, 'load_index_chunk')
		}
		return await this.loaded_chunks[hash]
	}
	async loadFilterChunk(hash) {
		if (!this.loaded_filters[hash]) {
			const url = `${this.basePath}filter/${hash}.pf_filter`
			this.loaded_filters[hash] = this._loadGenericChunk(url, 'load_filter_chunk')
		}
		return await this.loaded_filters[hash]
	}
	async _loadFragment(hash) {
		let compressed_resp = await fetch(`${this.basePath}fragment/${hash}.pf_fragment`)
		let compressed_fragment = await compressed_resp.arrayBuffer()
		let fragment = this.decompress(new Uint8Array(compressed_fragment), `Fragment ${hash}`)
		return JSON.parse(new TextDecoder().decode(fragment))
	}
	async loadFragment(hash, weighted_locations = [], search_term) {
		if (!this.loaded_fragments[hash]) {
			this.loaded_fragments[hash] = this._loadFragment(hash)
		}
		let fragment = await this.loaded_fragments[hash]
		fragment.weighted_locations = weighted_locations
		fragment.locations = weighted_locations.map((l) => l.location)
		if (!fragment.raw_content) {
			fragment.raw_content = fragment.content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
			fragment.content = fragment.content.replace(/\u200B/g, '')
		}
		if (!fragment.raw_url) {
			fragment.raw_url = fragment.url
		}
		fragment.url = this.processedUrl(fragment.raw_url, search_term)
		const excerpt_start = calculate_excerpt_region(weighted_locations, this.excerptLength)
		fragment.excerpt = build_excerpt(
			fragment.raw_content,
			excerpt_start,
			this.excerptLength,
			fragment.locations
		)
		fragment.sub_results = calculate_sub_results(fragment, this.excerptLength)
		return fragment
	}
	fullUrl(raw) {
		if (/^(https?:)?\/\//.test(raw)) {
			return raw
		}
		return `${this.baseUrl}/${raw}`.replace(/\/+/g, '/').replace(/^(https?:\/)/, '$1/')
	}
	processedUrl(url, search_term) {
		const normalized = this.fullUrl(url)
		if (this.highlightParam === null) {
			return normalized
		}
		let individual_terms = search_term.split(/\s+/)
		try {
			let processed = new URL(normalized)
			for (const term of individual_terms) {
				processed.searchParams.append(this.highlightParam, term)
			}
			return processed.toString()
		} catch (e) {
			try {
				let processed = new URL(`https://example.com${normalized}`)
				for (const term of individual_terms) {
					processed.searchParams.append(this.highlightParam, term)
				}
				return processed.toString().replace(/^https:\/\/example\.com/, '')
			} catch (e2) {
				return normalized
			}
		}
	}
	async getPtr() {
		while (this.raw_ptr === null) {
			await asyncSleep(50)
		}
		if (!this.raw_ptr) {
			console.error('Pagefind: WASM Error (No pointer)')
			throw new Error('Pagefind: WASM Error (No pointer)')
		}
		return this.raw_ptr
	}
	parseFilters(str) {
		let output = {}
		if (!str) return output
		for (const block of str.split('__PF_FILTER_DELIM__')) {
			let [filter, values] = block.split(/:(.*)$/)
			output[filter] = {}
			if (values) {
				for (const valueBlock of values.split('__PF_VALUE_DELIM__')) {
					if (valueBlock) {
						let extract = valueBlock.match(/^(.*):(\d+)$/)
						if (extract) {
							let [, value, count] = extract
							output[filter][value] = parseInt(count) ?? count
						}
					}
				}
			}
		}
		return output
	}
	stringifyFilters(obj = {}) {
		return JSON.stringify(obj)
	}
	stringifySorts(obj = {}) {
		let sorts = Object.entries(obj)
		for (let [sort, direction] of sorts) {
			if (sorts.length > 1) {
				console.warn(
					`Pagefind was provided multiple sort options in this search, but can only operate on one. Using the ${sort} sort.`
				)
			}
			if (direction !== 'asc' && direction !== 'desc') {
				console.warn(
					`Pagefind was provided a sort with unknown direction ${direction}. Supported: [asc, desc]`
				)
			}
			return `${sort}:${direction}`
		}
		return ``
	}
	async filters() {
		let ptr = await this.getPtr()
		let filters2 = this.backend.request_all_filter_indexes(ptr)
		let filter_chunks = filters2
			.split(' ')
			.filter((v) => v)
			.map((chunk) => this.loadFilterChunk(chunk))
		await Promise.all([...filter_chunks])
		ptr = await this.getPtr()
		let results = this.backend.filters(ptr)
		return this.parseFilters(results)
	}
	async preload(term, options2 = {}) {
		await this.search(term, { ...options2, preload: true })
	}
	async search(term, options2 = {}) {
		options2 = { verbose: false, filters: {}, sort: {}, ...options2 }
		const log = (str) => {
			if (options2.verbose) console.log(str)
		}
		log(`Starting search on ${this.basePath}`)
		let start = Date.now()
		let ptr = await this.getPtr()
		let filter_only = term === null
		term = term ?? ''
		let exact_search = /^\s*".+"\s*$/.test(term)
		if (exact_search) {
			log(`Running an exact search`)
		}
		term = term
			.toLowerCase()
			.trim()
			.replace(/[\.`~!@#\$%\^&\*\(\)\{\}\[\]\\\|:;'",<>\/\?\-]/g, '')
			.replace(/\s{2,}/g, ' ')
			.trim()
		log(`Normalized search term to ${term}`)
		if (!term?.length && !filter_only) {
			return {
				results: [],
				unfilteredResultCount: 0,
				filters: {},
				totalFilters: {},
				timings: {
					preload: Date.now() - start,
					search: Date.now() - start,
					total: Date.now() - start
				}
			}
		}
		let sort_list = this.stringifySorts(options2.sort)
		log(`Stringified sort to ${sort_list}`)
		const filter_list = this.stringifyFilters(options2.filters)
		log(`Stringified filters to ${filter_list}`)
		let index_resp = this.backend.request_indexes(ptr, term)
		let filter_resp = this.backend.request_filter_indexes(ptr, filter_list)
		let chunks = index_resp
			.split(' ')
			.filter((v) => v)
			.map((chunk) => this.loadChunk(chunk))
		let filter_chunks = filter_resp
			.split(' ')
			.filter((v) => v)
			.map((chunk) => this.loadFilterChunk(chunk))
		await Promise.all([...chunks, ...filter_chunks])
		log(`Loaded necessary chunks to run search`)
		if (options2.preload) {
			log(`Preload \u2014 bailing out of search operation now.`)
			return null
		}
		ptr = await this.getPtr()
		let searchStart = Date.now()
		let result = this.backend.search(ptr, term, filter_list, sort_list, exact_search)
		log(`Got the raw search result: ${result}`)
		let [unfilteredResultCount, all_results, filters2, totalFilters] = result.split(
			/:([^:]*):(.*)__PF_UNFILTERED_DELIM__(.*)$/
		)
		let filterObj = this.parseFilters(filters2)
		let totalFilterObj = this.parseFilters(totalFilters)
		log(`Remaining filters: ${JSON.stringify(result)}`)
		let results = all_results.length ? all_results.split(' ') : []
		let resultsInterface = results.map((result2) => {
			let [hash, score, all_locations] = result2.split('@')
			log(`Processing result: 
  hash:${hash}
  score:${score}
  locations:${all_locations}`)
			let weighted_locations = all_locations.length
				? all_locations.split(',').map((l) => {
						let [weight, balanced_score, location] = l.split('>')
						return {
							weight: parseInt(weight) / 24,
							balanced_score: parseFloat(balanced_score),
							location: parseInt(location)
						}
					})
				: []
			let locations = weighted_locations.map((l) => l.location)
			return {
				id: hash,
				score: parseFloat(score) * this.indexWeight,
				words: locations,
				data: async () => await this.loadFragment(hash, weighted_locations, term)
			}
		})
		const searchTime = Date.now() - searchStart
		const realTime = Date.now() - start
		log(
			`Found ${results.length} result${results.length == 1 ? '' : 's'} for "${term}" in ${Date.now() - searchStart}ms (${Date.now() - start}ms realtime)`
		)
		return {
			results: resultsInterface,
			unfilteredResultCount: parseInt(unfilteredResultCount),
			filters: filterObj,
			totalFilters: totalFilterObj,
			timings: { preload: realTime - searchTime, search: searchTime, total: realTime }
		}
	}
}
var Pagefind = class {
	constructor(options2 = {}) {
		this.backend = wasm_bindgen
		this.primaryLanguage = 'unknown'
		this.searchID = 0
		this.primary = new PagefindInstance({ ...options2, primary: true })
		this.instances = [this.primary]
		this.init(options2?.language)
	}
	async options(options2) {
		await this.primary.options(options2)
	}
	async init(overrideLanguage) {
		if (document?.querySelector) {
			const langCode = document.querySelector('html')?.getAttribute('lang') || 'unknown'
			this.primaryLanguage = langCode.toLocaleLowerCase()
		}
		await this.primary.init(overrideLanguage ? overrideLanguage : this.primaryLanguage, {
			load_wasm: true
		})
	}
	async mergeIndex(indexPath, options2 = {}) {
		if (this.primary.basePath.startsWith(indexPath)) {
			console.warn(
				`Skipping mergeIndex ${indexPath} that appears to be the same as the primary index (${this.primary.basePath})`
			)
			return
		}
		let newInstance = new PagefindInstance({ primary: false, basePath: indexPath })
		this.instances.push(newInstance)
		while (this.primary.wasm === null) {
			await asyncSleep(50)
		}
		await newInstance.init(options2.language || this.primaryLanguage, { load_wasm: false })
		delete options2['language']
		await newInstance.options(options2)
	}
	mergeFilters(filters2) {
		const merged = {}
		for (const searchFilter of filters2) {
			for (const [filterKey, values] of Object.entries(searchFilter)) {
				if (!merged[filterKey]) {
					merged[filterKey] = values
					continue
				} else {
					const filter = merged[filterKey]
					for (const [valueKey, count] of Object.entries(values)) {
						filter[valueKey] = (filter[valueKey] || 0) + count
					}
				}
			}
		}
		return merged
	}
	async filters() {
		let filters2 = await Promise.all(this.instances.map((i2) => i2.filters()))
		return this.mergeFilters(filters2)
	}
	async preload(term, options2 = {}) {
		await Promise.all(this.instances.map((i2) => i2.preload(term, options2)))
	}
	async debouncedSearch(term, options2, debounceTimeoutMs) {
		const thisSearchID = ++this.searchID
		this.preload(term, options2)
		await asyncSleep(debounceTimeoutMs)
		if (thisSearchID !== this.searchID) {
			return null
		}
		const searchResult = await this.search(term, options2)
		if (thisSearchID !== this.searchID) {
			return null
		}
		return searchResult
	}
	async search(term, options2 = {}) {
		let search2 = await Promise.all(this.instances.map((i2) => i2.search(term, options2)))
		const filters2 = this.mergeFilters(search2.map((s) => s.filters))
		const totalFilters = this.mergeFilters(search2.map((s) => s.totalFilters))
		const results = search2
			.map((s) => s.results)
			.flat()
			.sort((a, b) => b.score - a.score)
		const timings = search2.map((s) => s.timings)
		const unfilteredResultCount = search2.reduce((sum, s) => sum + s.unfilteredResultCount, 0)
		return { results, unfilteredResultCount, filters: filters2, totalFilters, timings }
	}
}
var pagefind = void 0
var initial_options = void 0
var init_pagefind = () => {
	if (!pagefind) {
		pagefind = new Pagefind(initial_options ?? {})
	}
}
var options = async (new_options) => {
	if (pagefind) {
		await pagefind.options(new_options)
	} else {
		initial_options = new_options
	}
}
var init = async () => {
	init_pagefind()
}
var destroy = async () => {
	pagefind = void 0
	initial_options = void 0
}
var mergeIndex = async (indexPath, options2) => {
	init_pagefind()
	return await pagefind.mergeIndex(indexPath, options2)
}
var search = async (term, options2) => {
	init_pagefind()
	return await pagefind.search(term, options2)
}
var debouncedSearch = async (term, options2, debounceTimeoutMs = 300) => {
	init_pagefind()
	return await pagefind.debouncedSearch(term, options2, debounceTimeoutMs)
}
var preload = async (term, options2) => {
	init_pagefind()
	return await pagefind.preload(term, options2)
}
var filters = async () => {
	init_pagefind()
	return await pagefind.filters()
}
export { debouncedSearch, destroy, filters, init, mergeIndex, options, preload, search }
