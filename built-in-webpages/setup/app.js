/*jshint esversion: 9 */
//const svgLogo = '<svg fill="brown" height=120px viewBox="0 0 24 24"><path d="M5 3C3.9 3 3 3.9 3 5S2.1 7 1 7V9C2.1 9 3 9.9 3 11S3.9 13 5 13H7V11H5V10C5 8.9 4.1 8 3 8C4.1 8 5 7.1 5 6V5H7V3M11 3C12.1 3 13 3.9 13 5S13.9 7 15 7V9C13.9 9 13 9.9 13 11S12.1 13 11 13H9V11H11V10C11 8.9 11.9 8 13 8C11.9 8 11 7.1 11 6V5H9V3H11M22 6V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V15H4V18H20V6H17.03V4H20C21.11 4 22 4.89 22 6Z" /></svg>'
const svgLogo = '<img alt="" src="data:image/webp;base64,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">';
const svgLock =  '<svg height="16pt" viewBox="0 0 24 24"><path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" /></svg>';
const svgUnlock = '<svg height="16pt" viewBox="0 0 24 24"><path d="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z" /></svg>';
const svgScan = '<path d="M12 20L8.4 15.2C9.4 14.45 10.65 14 12 14S14.6 14.45 15.6 15.2L12 20M4.8 10.4L6.6 12.8C8.1 11.67 9.97 11 12 11S15.9 11.67 17.4 12.8L19.2 10.4C17.19 8.89 14.7 8 12 8S6.81 8.89 4.8 10.4M12 2C7.95 2 4.21 3.34 1.2 5.6L3 8C5.5 6.12 8.62 5 12 5S18.5 6.12 21 8L22.8 5.6C19.79 3.34 16.05 2 12 2M7 24H9V22H7V24M15 24H17V22H15V24M11 24H13V22H11V24Z" />';
const svgConnect = '<path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" />';
const svgSave = '<path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />';
const svgRestart = '<path d="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z" />';
const svgEye = '<path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />';
const svgNoEye = '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>';
const svgMenu = '<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>';

var closeCb = function(){};
var port = location.port || (window.location.protocol === 'https:' ? '443' : '80');
var esp = `${window.location.protocol}//${window.location.hostname}:${port}/`;
var options = {};
var configFile;
var lastBox;

// Element selector shorthands
var $ = function(el) {
	return document.getElementById(el);
};

function hide(id) {
  $(id).classList.add('hide');
}

function show(id) {
  $(id).classList.remove('hide');
}

function newEl(element, attribute) {
  var el = document.createElement(element);
  if (typeof(attribute) === 'object') {
    for (var key in attribute) {
      el.setAttribute(key, attribute[key]);
    }
  }
  return el;
}

function getParameters() {
  var logo;
//  var logolink;

  show('loader');
  // Fetch actual status and config info
  fetch(esp + "getStatus")
  .then(res => res.json())
  .then(data => {
    $('esp-mode').innerHTML = data.mode;
    $('esp-ip').innerHTML = `<a href="${esp}">${esp}</a>`;
    $('firmware').innerHTML = data.firmware;
    $('about').innerHTML = 'Created with ' + data.liburl;
    $('about').setAttribute('href', data.liburl);
    configFile = data.path;
    
    // Fetch 'config.json'
    fetch(esp + configFile)
    .then(response => response.json())
    .then(data => {
      for (const key in data){
        if(data.hasOwnProperty(key)){
          if (key === 'name-logo') {
            $('name-logo').innerHTML = data[key].replace( /(<([^>]+)>)/ig, '');
            document.title = data[key].replace( /(<([^>]+)>)/ig, '');
            delete data[key];
            continue;
          }
          if (key == 'img-logo') {
            logo = data[key];
            delete data[key];
            continue;
          }
/*		  if (key == 'img-link') {
            logolink = data[key];
            delete data[key];
            continue;
          }*/
        }
      }
      
      // Custom logo (base 64)
      if (logo){
        fetch(logo)
        .then((response) => response.text())
        .then(base64 => setLogoBase64(logo, base64));
      }

/*      if (logolink){
        fetch(logolink)
        .then((response) => response.text())
        .then(llink => {
			console.log('llink:'+llink + ', logolink:' + logolink);
			
		  $('img-logo').innerHTML = "";
		  $('img-logo').append(img);
		  $('img-logo').setAttribute('type', 'number');
		  $('img-logo').setAttribute('title', '');	
		});	
      }*/
       
      options = data;
      createOptionsBox(options);
      hide('loader');      
    });
  });
}

function setLogoBase64(s, base64) {
  var size = s.replace(/[^\d_]/g, '').split('_');
  var img = newEl('img', {'class': 'logo', 'src': 'data:image/png;base64, '+ base64, 'style': `width:${size[0]}px;height:${size[1]}px`});
  $('img-logo').innerHTML = "";
  $('img-logo').append(img);
  $('img-logo').setAttribute('type', 'number');
  $('img-logo').setAttribute('title', '');
}

function addOptionsElement(opt) {
  const bools = Object.keys(opt)
  .filter(key => typeof(opt[key]) === "boolean")
  .reduce((obj, key) => {
    obj[key] = opt[key];
    return obj;
  }, {});
  
  if (Object.entries(bools).length !== 0) {
    var d  = newEl('div', {'class': 'row-wrapper'});
    Object.entries(bools).forEach(([key, value]) => {
      let lbl = newEl('label', {'class': 'input-label toggle'});
      let el = newEl('input', {'class': 't-check opt-input', 'type': 'checkbox', 'id': key});
      el.checked = value;
      let dv = newEl('div', {'class': 'toggle-switch'});
      let sp = newEl('span' , {'class': 'toggle-label'});
      sp.textContent = key;
      lbl.appendChild(el);
      lbl.appendChild(dv);
      lbl.appendChild(sp);
      addInputListener(el);
      d.appendChild(lbl);
    });
    lastBox.appendChild(d);
  }
  
  const others = Object.keys(opt)
  .filter(key => typeof(opt[key]) !== "boolean")
  .reduce((obj, key) => {
    obj[key] = opt[key];
    return obj;
  }, {});
  
  Object.entries(others).forEach(([key, value]) => {
    let lbl = newEl('label', {'class': 'input-label', 'label-for': key});
    lbl.textContent = key;
    let el = newEl('input',  {'class': 'opt-input', 'type': 'text', 'id': key});
    el.value = value;
    
    if (typeof(value) === "number")
      el.setAttribute('type', 'number');
    if (typeof(value) === "object" ) {
      // This is a select/option
      if (value.values) {
        el = newEl('select', {'id': key});
        value.values.forEach((a) => {
          var opt = newEl('option');
          opt.textContent = a;
          opt.value = a;
          el.appendChild(opt);
        });
        el.value = value.selected;
        lastBox.appendChild(el);
      }
      // This is a float value
      else {
        var num = Math.round(value.value  * (1/value.step)) / (1/value.step);
        el.setAttribute('type', 'number');
        el.setAttribute('step', value.step);
        el.setAttribute('min', value.min);
        el.setAttribute('max', value.max);
        el.value = Number(num).toFixed(3);
      }
    }
    addInputListener(el);
    var d = newEl('div', {'class': 'tf-wrapper'});
    d.appendChild(lbl);
    d.appendChild(el);
    lastBox.appendChild(d);

    if(key.endsWith('-hidden'))  {
      d.classList.add('hide');
    }
  });
  
}


function createNewBox(cont, lbl) {
  var box = newEl('div', {'class': 'ctn opt-box hide', 'id': 'option-box'+cont});
  var h = newEl('h2',  {'class': 'heading-2'});
  h.innerHTML = lbl;
  box.appendChild(h);
  $('main-box').appendChild(box);
  
  // Add new voice in menu and relatvie listener
  var lnk = newEl('a', {'class': 'a-link', 'id': 'set-opt'+cont, 'data-box': 'option-box'+cont});
  lnk.innerHTML = lbl;
  lnk.addEventListener('click', switchPage);
  $('nav-link').appendChild(lnk);
  return box;
}

async function createOptionsBox(raw) {
  var nest = {};
  var boxId = 'wifi-box';
  lastBox =  $(boxId);  
      
  Object.entries(raw).forEach(([key, value], index) => {
    if (boxId === 'wifi-box') {
      $('no-dhcp').checked = raw.dhcp;
      $('ip').value = raw.ip_address;
      $('gateway').value = raw.gateway;
      $('subnet').value = raw.subnet;
      if ($('no-dhcp').checked){
        show('conf-wifi');
        show('save-wifi');
      }
    }

    if (key.startsWith('param-box')) {
      addOptionsElement(nest);
      lastBox = createNewBox(index, value);
      nest = {};
      boxId = value;
    }
    else if (boxId != 'wifi-box') {
      var hidden = false;
      if (key.startsWith('img-logo') || key.startsWith('name-logo')) {
        hidden = true;
      }
      else if(key.startsWith('raw-css')) {
        var css = newEl("link", {'rel': 'stylesheet', 'href': value});
        document.head.appendChild(css);
        hidden = true;
      }
      // Inject runtime JS source file
      else if(key.startsWith('raw-javascript')) {
        var js = newEl("script", {'src': value});
        document.body.appendChild(js);
        hidden = true;
      }
      // Inject runtime HTML source file
      else if(key.startsWith('raw-html')) {
        var el = newEl('div', {'class': 'tf-wrapper raw-html', 'id': value, 'data-box': lastBox.id});
        lastBox.appendChild(el);
        fetch(value)
        .then((res) => res.text())
        .then((data) => $(value).innerHTML = data);
        hidden = true;
      }
      if (!hidden) {
        nest[key] = value;
      }
    }
  });
  
  // Add last items
  if (Object.entries(nest).length !== 0) {
    addOptionsElement(nest);
  }
}


function addInputListener(item) {
  // Add event listener to option inputs
  if (item.type  === "number") {
    item.addEventListener('change', () => {
       if (item.getAttribute("step")) {
        var obj = {};
        obj.value = Math.round(item.value  * (1/item.step)) / (1/item.step);
        obj.step = item.getAttribute("step");
        obj.min = item.getAttribute("min");
        obj.max = item.getAttribute("max");
        options[item.id] = obj;
      }
      else
        options[item.id] = parseInt(item.value);
    });
    return;
  }

  if(item.type === "text") {
    item.addEventListener('change', () => {
      options[item.id] = item.value;
    });
    return;
  }

  if(item.type === "checkbox") {
    item.addEventListener('change', () => {
      options[item.id] = item.checked;
    });
    return;
  }

  if(item.type === 'select-one'){
    item.addEventListener('change', (e) => {
      options[e.target.id].selected = e.target.value;
    });
    return;
  }
}

function insertKey(key,value,obj,pos){
  return Object.keys(obj).reduce((ac,a,i) => {
    if(i === pos) ac[key] = value;
    ac[a] = obj[a]; 
    return ac;
  },{});
}

function saveParameters() {
  // Backward compatibility
  if(Object.keys(options)[0].startsWith('param-box')) {
    if(Object.keys(options)[0] === 'param-box0') {
      options['param-box-0'] = options['wifi-box']; 
      options = {'dhcp': false, ...options};
    }
    else
      options = {'wifi-box': '', 'dhcp': false, ...options};
  }
  
  options.dhcp = $('no-dhcp').checked;
  if ($('no-dhcp').checked) {
    options = insertKey('ip_address', $('ip').value, options, 2);
    options = insertKey('gateway', $('gateway').value, options, 3);
    options = insertKey('subnet', $('subnet').value, options, 4);
    options["ip_address"] = $('ip').value;
    options["gateway"] = $('gateway').value;
    options["subnet"] = $('subnet').value;
  }
  
  var myblob = new Blob([JSON.stringify(options, null, 2)], {
    type: 'application/json'
  });
  var formData = new FormData();
  formData.append("data", myblob, '/' + configFile);

  // POST data using the Fetch API
  fetch('/edit', {
    method: 'POST',
    body: formData
  })

  // Handle the server response
  .then(response => response.text())
  .then(text => {
    openModal('Save options','<br><b>"/' + configFile +'"</b> saved successfully on flash memory!<br><br>');
  });
}


function showHidePassword() {
  var inp = $("password");
  if (inp.type === "password") {
    inp.type = "text";
    show('show-pass');
    hide('hide-pass');
  }
  else {
    inp.type = "password";
    hide('show-pass');
    show('hide-pass');
  }
}

function getWiFiList() {
  show('loader');
  fetch(esp + "scan")
  .then(response => response.json())
  .then(data => {
    listWifi(data);
    hide('loader');
  });
}

function selectWifi(row) {
  try {
    $('select-' + row.target.parentNode.id).checked = true;
  }
  catch(err) {
    $(row.target.id).checked = true;
  }
  $('ssid').value = this.cells[1].innerHTML;
  $('ssid-name').innerHTML = this.cells[1].innerHTML;
  $('password').focus();
}


function listWifi(obj) {
  if (obj.hasOwnProperty("reload"))
    setTimeout(getWiFiList, 2000); 
    
  obj.sort((a, b) => {
    return b.strength - a.strength;
  });
  
  const list = document.querySelector('#wifi-list');
  list.innerHTML = "";
	obj.forEach((net, i) => {
    // Create a single row with all columns
    var row = newEl('tr');
    var id = 'wifi-' + i;
    row.id = id;
    row.addEventListener('click', selectWifi);
	  row.innerHTML  = `<td><input type="radio" name="select" id="select-${id}"></td>`;
    row.innerHTML += `<td id="ssid-${id}">${net.ssid}</td>`;
    row.innerHTML += '<td class="hide-tiny">' + net.strength + ' dBm</td>';
    row.innerHTML += (net.security) ? '<td>' + svgLock + '</td>' : '<td>' + svgUnlock + '</td>';
    // Add row to list
    list.appendChild(row);
  });
  show('wifi-table');
}

function doConnection(e, f) {
  if ($('ssid').value === '' ||  $('password').value === ''){
    openModal('Connect to WiFi','Please insert a SSID and a Password');
    return;
  }
  var formdata = new FormData();
  formdata.append("ssid", $('ssid').value);
  formdata.append("password", $('password').value);
  formdata.append("persistent", $('persistent').checked);
  if (typeof f !== 'undefined')
    formdata.append("newSSID", true);
  if ($('no-dhcp').checked) {
    formdata.append("ip_address", $('ip').value);
    formdata.append("gateway", $('gateway').value);
    formdata.append("subnet", $('subnet').value);
  }
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  show('loader');
  var s;
  fetch('/connect', requestOptions)
  .then(function(res) {
    s = res.status;
    return res.text();
  })
  .then(function(data) {
    if (s === 200) {
      if (data.includes("already")) 
        openModal('Connect to WiFi', data, () => {doConnection(e, true)});
      else
        openModal('Connect to WiFi', data, restartESP);
    }
    else 
      openModal('Error!', data);
    
    hide('loader');
  })
  .catch((error) => {
    openModal('Connect to WiFi', error);
    hide('loader');
  });
}


function switchPage(el) {
  $('top-nav').classList.remove('resp');
  // Menu items
  document.querySelectorAll("a").forEach(item => {
    item.classList.remove('active');
  });
  el.target.classList.add('active');

  // Box items
  document.querySelectorAll(".opt-box").forEach(e => {
    e.classList.add('hide');
  });
  show(el.target.getAttribute("data-box"));

  if(el.target.id != 'set-wifi') {
    var fragment = document.createDocumentFragment();
    fragment.appendChild($('btn-hr'));
	  fragment.appendChild($('btn-box'));
	  const box = $(el.target.getAttribute("data-box"));
	  box.appendChild(fragment);
	  
	  document.querySelectorAll('.raw-html').forEach(function(el) {
	    if (el.getAttribute("data-box") === box.id)
        box.insertBefore(el,  $('btn-hr'));
    });
    
    show('btn-box');
    show('btn-hr');
  }
  else {
    hide('btn-box');
    hide('btn-hr');
  }
}


function showMenu() {
  $('top-nav').classList.add('resp');
}

function openModal(title, msg, fn, args) {
  $('message-title').innerHTML = title;
  $('message-body').innerHTML = msg;
  $('modal-message').open = true;
  $('main-box').style.filter = "blur(3px)";
  if (typeof fn != 'undefined') {
    closeCb = fn;
    show('ok-modal');
  }
  else
    hide('ok-modal');
}

function closeModal(do_cb) {
  $('modal-message').open = false;
  $('main-box').style.filter = "";
  if (typeof closeCb != 'undefined' && do_cb)
    closeCb();
}

function restartESP() {
  fetch(esp + "reset")
  .then(response => response.text())
  .then(data => {
    closeModal();
    openModal('Restart!', '<br>ESP restarted!');
  });
}

function handleSubmit() {
  let fileElement = $('file-input');
  // check if user had selected a file
  if (fileElement.files.length === 0) {
    alert('please choose a file');
    return;
  }
  var update = $('update-log');
  var loader = $('loader');
  var prg = $('progress-wrap');
  show('loader');
  show('progress-wrap');
  $('progress-wrap').classList.add('active');
  update.innerHTML = 'Update in progress';
  
  let formData = new FormData();
  formData.set('update', fileElement.files[0]);
  var req = new XMLHttpRequest();
  req.open('POST', '/update?size=' + fileElement.files[0].size);  
  req.onload = function(d) {
    hide('loader');
    $('progress-wrap').classList.remove('active');
    update.innerHTML = (req.status != 200)  ? `Error ${req.status}: ${req.statusText}` : req.response;
  };
  req.upload.addEventListener('progress', (p) => {
    let w = Math.round(p.loaded/p.total*100) + '%';
    if (p.lengthComputable) {
      $('progress-anim').style.width = w;
      update.innerHTML = 'Update in progress: ' + w;
    }
  });
  req.send(formData);
}

async function uploadFolder(e) {
  let list = $('listing');
  for (let file of Array.from(e.target.files)) {
    let path = file.webkitRelativePath;
    let item = newEl('li');
    item.textContent = path;
    list.appendChild(item);
    // Save each file in the ESP flash
    var reader = new FileReader();
    reader.onload = function(event) {
      // Remove default "data" from path
      if (path.startsWith("data/"))
        path = path.replace("data/", "");
      var formData = new FormData();
      formData.set("data", file, "/" + path);
      // POST data using the Fetch API
      fetch('/edit', {method: 'POST', body: formData})
      .then(response => response.text())
    };
    reader.readAsText(file);
  };
}

// Initializes the app.
$('svg-menu').innerHTML = svgMenu;
$('svg-eye').innerHTML = svgEye;
$('svg-no-eye').innerHTML = svgNoEye;
$('svg-scan').innerHTML = svgScan;
$('svg-connect').innerHTML = svgConnect;
$('svg-save').innerHTML = svgSave;
$('svg-save2').innerHTML = svgSave;
$('svg-restart').innerHTML = svgRestart;
$('img-logo').innerHTML = svgLogo;

$('hum-btn').addEventListener('click', showMenu);
$('scan-wifi').addEventListener('click', getWiFiList);
$('connect-wifi').addEventListener('click', doConnection);
$('save-params').addEventListener('click', saveParameters);
$('save-wifi').addEventListener('click', saveParameters);
$('show-hide-password').addEventListener('click', showHidePassword);
$('set-wifi').addEventListener('click', switchPage);
$('set-update').addEventListener('click', switchPage);
$('about').addEventListener('click', switchPage);
$('restart').addEventListener('click', restartESP);
$('picker').addEventListener('change', uploadFolder );
$('update-btn').addEventListener('click', handleSubmit);
$('file-input').addEventListener('change', () => {
  $('fw-label').innerHTML = $('file-input').files.item(0).name +' (' + $('file-input').files.item(0).size + ' bytes)' ;
  $('fw-label').style.background = 'brown';
});

$('no-dhcp').addEventListener('change', function() {
  if (this.checked) {
    show('conf-wifi');
    show('save-wifi');
  }
  else {
    hide('conf-wifi');
  }
});
window.addEventListener('load', getParameters);
