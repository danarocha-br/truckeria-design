import { styled } from '../../stitches.config';
import ReactSelect from 'react-select/async-creatable';

import { selectInputStyles } from '../Select/styles';

export const SelectInput = styled(ReactSelect, { ...selectInputStyles });
