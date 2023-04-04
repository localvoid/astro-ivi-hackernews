import { component, invalidate } from "ivi";
import { htm } from "@ivi/htm";

export default component((c) => {
  let _open = true;
  const onClick = () => {
    _open = !_open;
    invalidate(c);
  };

  return ({ children }) => {
    return /*ssr*/ htm`
    <div class="toggle" class=${_open ? "toggle open" : "toggle"}>
      <a @click=${onClick}>
        ${_open ? "[-]" : "[+] comments collapsed"}
      </a>
    </div>
    <ul class="comment-children" ~display=${_open ? "block" : "none"}>
      ${children}
    </ul>
    `;
  };
});
