import { DropdownVariables } from '../../../teams/components/Dropdown/dropdownVariables';
import { pxToRem } from '../../../../utils';

export default (siteVars): Partial<DropdownVariables> => ({
  backgroundColor: siteVars.colors.black,
  borderColor: siteVars.colors.white,
  borderWidth: `1px`,
  backgroundColorHover: siteVars.colors.black,
  openBorderColorHover: undefined,
  borderColorHover: siteVars.accessibleCyan,
  borderColorFocus: siteVars.accessibleCyan,
  color: siteVars.colors.white,
  selectedItemColor: siteVars.colors.white,
  listBackgroundColor: siteVars.colors.black,
  listBorderColor: siteVars.colors.white,
  listBoxShadow: undefined,
  listBorderWidth: '1px',
  listItemFocusBorderWidth: pxToRem(2),
  listItemHeaderColor: siteVars.colors.white,
  listItemContentColor: siteVars.colors.white,
  listItemBackgroundColor: siteVars.colors.black,
  listItemColorHover: siteVars.colors.black,
  listItemBackgroundColorHover: siteVars.accessibleCyan,
  listItemBackgroundColorActive: siteVars.accessibleCyan,
  listItemColorActive: siteVars.colors.black,
  listItemSelectedColor: siteVars.accessibleCyan,
  selectedItemBackgroundColor: siteVars.colors.black,
  selectedItemColorFocus: siteVars.colors.black,
  selectedItemBackgroundColorFocus: siteVars.accessibleCyan,
  triggerButtonColorFocusActive: siteVars.colors.white,
  triggerButtonColorHover: siteVars.colors.white
});
