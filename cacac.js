<main class="main">
<h2 id="tituloPagina" style="text-align:center;">Cadastrar Produto</h2>

<form id="formProduto" class="form-produto">

  <label>Nome do Produto</label>
  <input type="text" id="nome" required>

  <label>Código de Barras</label>
  <div class="form-row">
    <input type="text" id="codigo" required placeholder="Aguardando leitura..." style="flex:1;">
    <button type="button" id="btnScan" class="btn-scan">📷 Ler</button>
  </div>

  <video id="scannerPreview"
         style="display:none;width:260px;margin-top:10px;border:1px solid #fff;border-radius:8px;"></video>

  <label>Lote</label>
  <input type="text" id="lote" required>

  <label>Preço</label>
  <input type="text" id="preco" required placeholder="0,00">

  <label>Setor</label>
  <select id="setor" required>
    <option value="Mercearia">Mercearia</option>
    <option value="Bebidas">Bebidas</option>
    <option value="Frios">Frios</option>
    <option value="Higiene">Higiene</option>
    <option value="Limpeza">Limpeza</option>
    <option value="Açougue">Açougue</option>
    <option value="Outros">Outros</option>
  </select>

  <label>Data de Validade</label>
  <input type="date" id="validade" required>

  <label>Foto do Produto</label>
  <div class="foto-area">
      <video id="cameraPreview"
             autoplay playsinline
             style="display:none;width:200px;border-radius:8px;"></video>

      <img id="previewFoto"
           style="display:none;width:120px;border-radius:6px;border:1px solid #fff;">

      <input type="file" id="foto" accept="image/*" style="display:none;">
      <button type="button" id="btnOpenCamera">📷 Abrir Câmera</button>
      <button type="button" id="btnCapturar" style="display:none;">Capturar</button>
  </div>

  <button type="button" id="btnSalvar" class="btn-salvar">Salvar Produto</button>
  <button type="button" id="btnLimpar" class="btn-limpar">Limpar</button>

</form>