<script lang="ts" setup>
import { styleStorage } from '@/assets/utils/styleStorage';
import { CSSStyle } from '@/assets/utils/styleStorage';

const cssHandler = {
  createStyleObject(fileName: string, cssContent: string): CSSStyle {
    return {
      id: 0,
      nome: this.extractFileName(fileName),
      css: cssContent
    };
  },

  extractFileName(fileName: string): string {
    return fileName.replace('.css', '');
  },
};

async function importCss(event: any): Promise<void> {
    const file = event.target?.files[0];

    if (!file) return

    const cssContent = await readFileAsText(file);
    const newStyle = cssHandler.createStyleObject(file.name, cssContent);
    styleStorage.addStyle(newStyle);    
};

function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        resolve(content);
      }
    };
    
    reader.readAsText(file);
  });
};
</script>

<template>
  <div class="modal-container">
    <div class="modal-component">
      <input @change="importCss($event)" type="file" id="cssInput" accept=".css" style="display: none;"/>
      <button class="file-select">
        <img src="" alt="" class="file-img">
        <label class="file-label">Selecionar arquivo</label>
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-component {
    display: flex;
    flex-direction: column;
    width: fit-content;
    max-width: 600px;
    height: fit-content;
    max-height: 600px;
    padding: 18px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, .2);
    background: rgba(16, 18, 24, .4);
    box-shadow: 5px 10px 24px #00000040;
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    z-index: 99999;
}
.file-select {
  width: 204px;
  height: 204px;
  border-radius: 6px;
  border: 1px solid rgba(242, 242, 242, .2);
  background: #2E313A;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1/1;
}

.file-label {
  font-size: 15px;
}
</style>