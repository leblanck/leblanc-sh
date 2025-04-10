const copyButton = document.querySelector(".copy-button");
const copyText = document.querySelector(".copy-text");
const copyTextWrapper = document.querySelector(".copy-text-wrapper")

copyButton.addEventListener('click', event => {
  navigator.clipboard.writeText(copyText.innerHTML);
  event.preventDefault();
  copyTextWrapper.classList.toggle("success");
	copyTextWrapper.innerHTML = '<span class="fa-solid fa-check"></span> Copied!';
  
  setTimeout(function () {
    copyTextWrapper.classList.toggle("success");
		copyTextWrapper.innerHTML =  '<span class="fa-regular fa-copy fa-sm"></span> kyle@leblanc.sh';
  }, 5000);
});
