import { useTranslation } from "react-i18next";
// import { local } from "store2";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const lngs = {
  ro: { nativeName: "RO" },
  en: { nativeName: "EN" },
};

const LngSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <DropdownButton title={<i className="fa-solid fa-globe"></i>}>
      {Object.keys(lngs).map((lng) => (
        <Dropdown.Item
          key={lng}
          className="mr-2"
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default LngSwitcher;
