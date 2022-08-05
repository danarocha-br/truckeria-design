import { styled } from '../../stitches.config';
import NumberFormat from 'react-number-format';

import { inputStyles } from '../TextInput/styles';

export const Input = styled(NumberFormat, { ...inputStyles });
