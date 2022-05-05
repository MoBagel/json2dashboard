import type {
  CarouselProps,
  ColProps,
  CommentProps,
  DividerProps,
  ImageProps,
  PageHeaderProps,
  PaginationProps,
  PopoverProps,
  RateProps,
  RowProps,
  SpaceProps,
  TagType,
  TooltipProps,
  TypographyProps,
} from 'antd';

import {
  Card,
  Layout,
  Row,
  Col,
  Button,
  Typography,
  Space,
  Table,
  Slider,
  Anchor,
  Divider,
  Breadcrumb,
  Menu,
  Dropdown,
  PageHeader,
  Pagination,
  Steps,
  AutoComplete,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  InputNumber,
  Rate,
  Select,
  Switch,
  TimePicker,
  Upload,
  Avatar,
  Badge,
  Carousel,
  Collapse,
  Comment,
  Tooltip,
  Descriptions,
  Image,
  List,
  Popover,
  Statistic,
  Tabs,
  Tag,
  Timeline,
  Alert,
} from 'antd';
import { StatusLabel, Link } from '../components';

import { Line } from '@ant-design/charts';
import type { LineConfig, PieConfig, ScatterConfig } from '@ant-design/plots';
import { Pie, Scatter } from '@ant-design/plots';
import type { CardInterface } from 'antd/lib/card';
import type { SliderRangeProps, SliderSingleProps } from 'antd/lib/slider';
import type { CarouselRef } from 'antd/lib/carousel';
import type { CompositionImage } from 'antd/lib/image';

const CompConfig: {
  Card: CardInterface;
  Layout: typeof Layout;
  Row: React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLDivElement>>;
  Col: React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLDivElement>>;
  Button: typeof Button;
  Typography: TypographyProps;
  Space: React.FC<SpaceProps>;
  Table: typeof Table;
  Line: React.ForwardRefExoticComponent<LineConfig & React.RefAttributes<unknown>>;
  Pie: React.ForwardRefExoticComponent<PieConfig & React.RefAttributes<unknown>>;
  Scatter: React.ForwardRefExoticComponent<ScatterConfig & React.RefAttributes<unknown>>;
  StatusLabel: typeof StatusLabel;
  Slider: React.ForwardRefExoticComponent<
    (SliderSingleProps | SliderRangeProps) & React.RefAttributes<unknown>
  >;
  Anchor: typeof Anchor;
  Divider: React.FC<DividerProps>;
  Breadcrumb: typeof Breadcrumb;
  Menu: typeof Menu;
  Dropdown: typeof Dropdown;
  PageHeader: React.FC<PageHeaderProps>;
  Pagination: React.FC<PaginationProps>;
  Steps: typeof Steps;
  AutoComplete: typeof AutoComplete;
  Checkbox: typeof Checkbox;
  DatePicker: typeof DatePicker;
  Form: typeof Form;
  Input: typeof Input;
  Radio: typeof Radio;
  InputNumber: typeof InputNumber;
  Rate: React.ForwardRefExoticComponent<RateProps & React.RefAttributes<unknown>>;
  Select: typeof Select;
  Switch: typeof Switch;
  Upload: typeof Upload;
  Avatar: typeof Avatar;
  TimePicker: typeof TimePicker;
  Badge: typeof Badge;
  Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<CarouselRef>>;
  Collapse: typeof Collapse;
  Comment: React.FC<CommentProps>;
  Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<unknown>>;
  Descriptions: typeof Descriptions;
  Image: CompositionImage<ImageProps>;
  List: typeof List;
  Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<unknown>>;
  Statistic: typeof Statistic;
  Tabs: typeof Tabs;
  Tag: TagType;
  Timeline: typeof Timeline;
  Alert: typeof Alert;
  Link: typeof Link;
} = {
  Card,
  Layout,
  Row,
  Col,
  Button,
  Typography,
  Space,
  Table,
  Line,
  Pie,
  Scatter,
  StatusLabel,
  Slider,
  Anchor,
  Divider,
  Breadcrumb,
  Menu,
  Dropdown,
  PageHeader,
  Pagination,
  Steps,
  AutoComplete,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  InputNumber,
  Rate,
  Select,
  Switch,
  TimePicker,
  Upload,
  Avatar,
  Badge,
  Carousel,
  Collapse,
  Comment,
  Tooltip,
  Descriptions,
  Image,
  List,
  Popover,
  Statistic,
  Tabs,
  Tag,
  Timeline,
  Alert,
  Link,
};

export default CompConfig;
