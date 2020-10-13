import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import Button from './forms/button';
import Checkbox from './forms/checkbox';
import CheckboxWithLabel from './forms/checkbox-with-label';
import RadioGroup from './forms/radio-group';
import Select from './forms/select';
import SelectCheckbox from './forms/select-checkbox'
import InputText from './forms/text';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import InfoIcon from '@material-ui/icons/Info';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import AddIcon from '@material-ui/icons/Add';
import RoomIcon from '@material-ui/icons/Room';
import LaunchIcon from '@material-ui/icons/Launch';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomizedTables from "./CustomizedTables";
import Navigation from "./Navigation/Navigation";
import MyDialog from "./MyDialog/index";

function App() {
   /* return (
   <React.Fragment>
      <header>
         <h2 class="heading-xxl"> Typography </h2>
      </header>
      <Button></Button>
      <Checkbox></Checkbox>
      <CheckboxWithLabel></CheckboxWithLabel>
      <RadioGroup></RadioGroup>
      <Select></Select>
      <SelectCheckbox></SelectCheckbox>
      <InputText></InputText>
   </React.Fragment>
   ); */
   return (
      <React.Fragment>
         <Navigation></Navigation>

         <div class="styleguide-nav">
            <div class="container">
               <a href="#"> Base Styling  </a>
               <a href="#"> Module  </a>
               <a href="#"> API Standards </a>
            </div>
         </div>
         <div class="container">
            <h2 class="heading-xxl"> Typography </h2>
            <h2 class="heading-l"> Headings Styles </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _typography.scss
         </code>
            </div>
         </div>
         <div class="container">
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.heading-xxl</span>
               </div>
               <div class="styleg-row__example">
                  <span class="heading-xxl">LOREM IPSUM</span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.heading-xl, .heading-xxl (mobile)</span>
               </div>
               <div class="styleg-row__example">
                  <span class="heading-xl">LOREM IPSUM</span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.heading-l, .heading-xxl (mobile)</span>
               </div>
               <div class="styleg-row__example">
                  <span class="heading-l">LOREM IPSUM</span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name ">.heading-l(mobile)</span>
               </div>
               <div class="styleg-row__example">
                  <span class="heading-l heading-l-mob">LOREM IPSUM</span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.heading-m</span>
               </div>
               <div class="styleg-row__example">
                  <span class="heading-m">LOREM IPSUM</span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.heading-s</span>
               </div>
               <div class="styleg-row__example">
                  <span class="heading-s">LOREM IPSUM</span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.heading-xs</span>
               </div>
               <div class="styleg-row__example">
                  <span class="heading-xs">LOREM IPSUM</span>
               </div>
            </div>
            <h2 class="heading-l"> Body Typography Styles </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _typography.scss
         </code>
            </div>
         </div>
         <div class="container">
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.bh-xl</span>
               </div>
               <div class="styleg-row__example">
                  <span class="bh-xl"> LOREM IPSUM  (Body XL - 22px / 20px line spacing) </span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.bh-l </span>
               </div>
               <div class="styleg-row__example">
                  <span class="bh-l"> LOREM IPSUM ( Body L - 18px / 20px line spacing ) </span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.bh-m </span>
               </div>
               <div class="styleg-row__example">
                  <span class="bh-m">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ( Body M - 15px / 18px line spacing ) </span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.body-copy </span>
               </div>
               <div class="styleg-row__example">
                  <span class="body-copy"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. ( Body Copy - 15px / 18px line spacing )  </span>
               </div>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">.legal </span>
               </div>
               <div class="styleg-row__example">
                  <span class="legal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ( Body Copy - 12px / 14px line spacing )  </span>
               </div>
            </div>
            <h2 class="heading-l"> Text Links </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _typography.scss
         </code>
            </div>
            <div class="link-wrap">
               <div class="styleg-row">
                  <div class="styleg-row__css">
                     <span class="styleg-row__css-class-name">.link, a </span>
                  </div>
                  <div class="styleg-row__example">
                     <a href="#" class="link"> Link 15px </a>
                     <a href="#" class="link">  <ArrowForwardIosIcon /> </a>
                     <a href="#" class="link">  <LaunchIcon /> </a>

                     <a href="#" class="link"> <i class="fa fa-external-link" aria-hidden="true"></i> </a>
                     <span> Titel :</span>   <a href="#" class="link"> Link Text </a>
                     <a href="#" class="link"><i class="fa fa-map-marker" aria-hidden="true"></i> <RoomIcon />  92780 </a>
                     <a href="#" class="link"> See More <KeyboardArrowDownIcon /> </a>
                     <a href="#" class="link"> Link to More  <ArrowForwardIosIcon /> </a>
                     <a href="#" class="link"> External Link <LaunchIcon />  </a>

                  </div>
               </div>
            </div>

            <h2 class="heading-xxl"> Spacing </h2>
            <h2 class="heading-l"> Spacing Types </h2>

            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: __module-spacing.scss
         </code>
            </div>

            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">@include spacing -xs <span className="info">@include spacing-xs (mobile) </span> </span>
               </div>
               <div class="styleg-row__example">
                  <span class="body-copy">
                     <div className="styleg-row__spacing styleg-row__spacing--xs"></div>
                  </span>
               </div>
            </div>

            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name"> @include spacing -s  <span className="info">@include spacing-s (mobile) </span> </span>
               </div>
               <div class="styleg-row__example">
                  <span class="body-copy">
                     <div className="styleg-row__spacing styleg-row__spacing--s"></div>
                  </span>
               </div>
            </div>

            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">@include spacing -m
            <span className="info">@include spacing-m (mobile)</span>
                     <span className="info">@include spacing-l (mobile)</span>

                  </span>
               </div>
               <div class="styleg-row__example">
                  <span class="body-copy">
                     <div className="styleg-row__spacing styleg-row__spacing--m"></div>
                  </span>
               </div>
            </div>

            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">@include spacing-l <span className="info"> @include spacing-xl (mobile) </span> </span>
               </div>
               <div class="styleg-row__example">
                  <span class="body-copy">
                     <div className="styleg-row__spacing styleg-row__spacing--l"></div>
                  </span>
               </div>
            </div>


            <h2 class="heading-xxl"> Buttons </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _buttons.scss
         </code>
            </div>
            <div class="app-btn-wrap">  <Button> </Button>  </div>
            <h2 class="heading-xxl"> Input Fields :   </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _forms.scss
         </code>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">[variant="filled"] <div className="info"> Use this styling by default </div> </span>
               </div>
               <div class="styleg-row__example">
                  <span class="body-copy">
                     <InputText></InputText>
                  </span>
               </div>
            </div>
            <h2 class="heading-l"> Input checkbox: </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _forms.scss
         </code>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">
                     <span className="info"> Use this styling by default </span>
                     <div class="marginT30">
                        <span className="info"> .acc-checkbox-wraper </span>
                        <span className="info"> .acc-checkbox-wraper.active </span>
                     </div>

                  </span>
               </div>
               <div class="styleg-row__example">
                  <span class="body-copy">
                     <CheckboxWithLabel></CheckboxWithLabel>
                  </span>
               </div>
            </div>
            <h2 class="heading-l"> Input Radio Buttons: </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _forms.scss
         </code>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name"> <span className="info"> Use this styling by default </span> <span className="info">  .des-redio ( when description)  </span> <span className="info"> .des-redio.active</span> </span>
               </div>
               <div class="styleg-row__example">
                  <span class="body-copy">
                     <RadioGroup></RadioGroup>
                  </span>
               </div>
            </div>

            <h2 class="heading-l"> Droplists - User Search Field : </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _forms.scss
         </code>
            </div>
            <div class="styleg-row">
               <div class="styleg-row__css">
                  <span class="styleg-row__css-class-name">MuiAutocomplete-root <span className="info"> Use this styling by default </span> </span>
               </div>
               <div class="styleg-row__example">
                  <span class="body-copy">
                     <SelectCheckbox></SelectCheckbox>
                  </span>
               </div>
            </div>

            <h2 class="heading-xxl"> ICONOGRAPHY  </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _app-icons.scss
         </code>
            </div>
            <div className="marginT30">
               <Grid container spacing={6}>
                  <Grid item xs={12}>
                     <Paper className="paper">
                        <Grid container spacing={4}>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <KeyboardArrowDownIcon fontSize="large" /> <div> Down Arrow </div> <div> KeyboardArrowDownIcon </div> <div>.iconSize36  </div> </div>  </Grid>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <KeyboardArrowUpIcon fontSize="large" /> <div> Up Arrow </div>   <div> KeyboardArrowDownIcon </div> <div>  .iconSize36  </div> </div>  </Grid>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <KeyboardArrowLeftIcon fontSize="large" /> <div> Left Arrow</div> <div>KeyboardArrowLeftIcon </div> <div>  .iconSize36  </div> </div>  </Grid>

                        </Grid>
                     </Paper>
                  </Grid>

                  <Grid item xs={12}>
                     <Paper className="paper">
                        <Grid container spacing={4}>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <CloseIcon className="iconSize42" /> <div> Close Icon </div>  <div> CloseIcon </div> <div> .iconSize42 </div> </div>  </Grid>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <AddIcon className="iconSize24" /> <div> Plus Icon </div> <div> KeyboardArrowDownIcon </div> <div> .iconSize24 </div> </div>  </Grid>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <RemoveIcon className="iconSize24" /> <div> Minus Icon </div>   <div> KeyboardArrowDownIcon </div> <div> .iconSize24 </div> </div>  </Grid>

                        </Grid>
                     </Paper>
                  </Grid>

                  <Grid item xs={12}>
                     <Paper className="paper">
                        <Grid container spacing={4}>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <LaunchIcon className="iconSize20" /> <div> External Icon </div>  <div> LaunchIcon </div> <div> .iconSize20 </div> </div>  </Grid>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <ArrowForwardIosIcon className="iconSize20" /> <div> Right Arrow</div> <div>ArrowForwardIosIcon </div> <div>  .iconSize20  </div> </div>  </Grid>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <CloseIcon className="iconSize22 danger" /> <div> Close Icon </div>  <div> CloseIcon </div> <div> .iconSize22 .danger </div> </div>  </Grid>
                        </Grid>
                     </Paper>
                  </Grid>


                  <Grid item xs={12}>
                     <Paper className="paper">
                        <Grid container spacing={4}>

                           <Grid item xs={2}> <div class="icon-box-wrap"> <CheckIcon className="iconSize18" /> <div> CheckIcon Icon </div>  <div> CheckIcon </div> <div> .iconSize18 </div> </div>  </Grid>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <InfoIcon className="iconSize18" /> <div> ToolTip Icon </div> <div>InfoIcon </div> <div>  .iconSize18  </div> </div>  </Grid>
                           <Grid item xs={2}> <div class="icon-box-wrap"> <LocationOnIcon className="iconSize13" /> <div> Location Pin Icon </div> <div>LocationOnIcon </div> <div>  .iconSize13  </div> </div>  </Grid>

                        </Grid>
                     </Paper>
                  </Grid>




               </Grid>
            </div>

            <h2 class="heading-xxl"> Brand and Accent Colors : </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  <div> SCSS: _variables.scss </div>
               </code>
               <code>
                  <div> SCSS: _brand-colors.scss </div>

               </code>
            </div>

            <div class="marginT30 color-plate-wrap">
               <Grid container spacing={6}>
                  <Grid item xs={12}>
                     <Paper className="paper">

                     </Paper>
                     <Paper className="paper">
                        <Grid container spacing={1}>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-java"> <div>$jdp-java</div> <div>#16a7cb </div> </div>  </Grid>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-aqua"> <div>$jdp-aqua</div> <div>#23c0a8</div>  </div>  </Grid>
                           <Grid item xs={3} sm={3}> <div class="color-plate jdp-electricgreen"> <div>$jdp-electricgreen</div>  <div>#33e776 </div>  </div>  </Grid>


                        </Grid>
                     </Paper>

                     <Paper className="paper">
                        <Grid container spacing={1}>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-java-50"> <div>$jdp-java-50</div> <div>#e8effd </div> </div>  </Grid>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-aqua-50"> <div>$jdp-aqua-50</div> <div>#80e2d4</div>  </div>  </Grid>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-electricgreen-50"> <div>$jdp-electricgreen-50</div>  <div>#80f4bf </div>  </div>  </Grid>

                        </Grid>
                     </Paper>

                     <Paper className="paper">
                        <Grid container spacing={1}>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-java-30"> <div>$jdp-java-30</div> <div>#b7e4ef </div> </div>  </Grid>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-aqua-30"> <div>$jdp-aqua-30</div> <div>#b3eee5</div>  </div>  </Grid>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-electricgreen-30"> <div>$jdp-electricgreen-30</div>  <div>#b3f9d9 </div>  </div>  </Grid>

                        </Grid>
                     </Paper>
                     <Paper className="paper">
                        <Grid container spacing={1}>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-java-10"> <div>$jdp-java-10</div> <div>#e7f6fa </div> </div>  </Grid>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-aqua-10"> <div>$jdp-aqua-10</div> <div>#e6f9f7</div>  </div>  </Grid>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-electricgreen-10"> <div>$jdp-electricgreen-10</div>  <div>#e7f6fa </div>  </div>  </Grid>

                        </Grid>
                        <Grid container spacing={1}>
                           <Grid item xs={6} sm={3}> <div class="color-plate jdp-red"> <div>$jdp-red</div>  <div>#f53c3c </div> </div>  </Grid>

                        </Grid>
                     </Paper>

                  </Grid>



               </Grid>
            </div>
            <h2 class="heading-l"> Text and Content  </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  <div> SCSS: _variables.scss </div>
               </code>
               <code>
                  <div> SCSS: _brand-colors.scss </div>

               </code>
            </div>
            <div class="marginT30 color-plate-wrap">
               <Grid container spacing={6}>
                  <Grid item xs={12}>
                     <Paper className="paper">
                        <Grid container spacing={4}>
                           <Grid item xs={2}> <span class="info"> Headline Text  </span><div class="color-plate jdp-black"> <div>$jdp-black</div> <div>#00000 </div> </div>  </Grid>
                           <Grid item xs={2}> <span class="info"> Body Text  </span> <div class="color-plate jdp-body-text"> <div>$jdp-???</div> <div>#2B2B2B</div>  </div>  </Grid>
                           <Grid item xs={2}> <span class="info"> Sub Body Text  </span> <div class="color-plate jdp-gray"> <div>$jdp-gray</div>  <div>#757575 </div>  </div>  </Grid>
                           <Grid item xs={2}> <span class="info"> Input Borders </span> <div class="color-plate jdp-gray"> <div>$jdp-gray</div>  <div>#757575 </div>  </div>  </Grid>
                           <Grid item xs={2}> <span class="info"> Section Borders  </span> <div class="color-plate jdp-medgray"> <div>$jdp-medgray</div>  <div>#cccccc </div>  </div>  </Grid>
                           <Grid item xs={2}> <span class="info"> Backgrounds &amp; Misc </span> <div class="color-plate jdp-ltgray"> <div>$jdp-ltgray</div>  <div>#e5e5e5 </div>  </div>  </Grid>
                           <Grid item xs={2}> <span class="info"> ----------  </span> <div class="color-plate jdp-offwhite"> <div>$jdp-offwhite</div>  <div>#f3f3f3 </div>  </div>  </Grid>
                           <Grid item xs={2}> <span class="info"> ----------  </span> <div class="color-plate jdp-white"> <div>$jdp-white </div>  <div>#ffffff </div>  </div>  </Grid>
                           <Grid item xs={2}> <span class="info"> Links/Buttons  </span> <div class="color-plate jdp-radiantblue"> <div>$jdp-radiantblue </div>  <div>#006BE0 </div>  </div>  </Grid>
                           <Grid item xs={2}> <span class="info"> Links/Buttons  </span> <div class="color-plate jdp-error"> <div>$jdp-error </div>  <div>#f53c3c </div>  </div>  </Grid>
                        </Grid>
                     </Paper>
                  </Grid>

               </Grid>
            </div>
            <h2 class="heading-xxl"> Customized Tables </h2>
            <div class="styleg__files">
               <h2 class="heading-l"> Relevant files </h2>
               <code>
                  SCSS: _tables.scss
         </code>
            </div>
            <div className="marginT30">

               <CustomizedTables></CustomizedTables>

            </div>
            <div className="marginT30">
               <MyDialog></MyDialog>
            </div>
         </div>
      </React.Fragment>
   );
}
export default App;