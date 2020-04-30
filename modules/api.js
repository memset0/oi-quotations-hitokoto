const fs = require('fs')
const path = require('path')

let list = []
let searching = false

let urlroot = '/'
let fileroot = path.join(__dirname, '../public/source')

function search(root = null, depth = 0) {
	if (!depth) {
		if (searching) {
			return
		}
		searching = true
		tempList = []
		root = fileroot
	}
	fs.readdir(root, (err, files) => {
		if (err) throw err;
		files.forEach((file) => {
			let dir = path.join(root, file)
			if (dir.match(/(.git)/g)) return
			fs.stat(dir, (err, sta) => {
				if (err) throw err;
				if (sta.isFile()) {
					tempList.push(encodeURI(path.join(urlroot, 'source', path.relative(fileroot, dir))))
				} else if (sta.isDirectory()) {
					search(dir, depth + 1)
				}
			})
		})
	})
	if (!depth) {
		list = tempList
		searching = false
	}
}

function query() {
	return list[Math.floor(Math.random() * list.length)]
}

search()
module.exports = {
	search: search, 
	query: query,
}