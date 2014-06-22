<?php
/**
 * User: Tomasz Witkowski
 * Date: 13/10/13
 * Time: 16:20
 */

include $lang.'/basicSettingsVars.php';
?>
<a name="basicSettings"></a>
<div class="">
    <h2><?php echo $bsTitle; ?></h2>
    <div class="row">
        <div class="span6">
            <label for="currentDay"><?php echo $bsDayLabel; ?></label>
            <select class="span2" id="currentDay">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option class="sixDaySchedule addline" disabled>43</option>
                <option class="sixDaySchedule addline" disabled>44</option>
                <option class="sixDaySchedule addline" disabled>45</option>
                <option class="sixDaySchedule addline" disabled>46</option>
                <option class="sixDaySchedule addline" disabled>47</option>
                <option class="sixDaySchedule addline" disabled>48</option>
            </select>
        </div>
        <div class="span6">
            <label><?php echo $bsProgrammeLabel; ?></label>
            <div class="btn-group span1">
                <button class="btn" id="days6">6</button>
                <button class="btn  btn-primary" id="days7">7</button>
            </div>
            <span class="span2"> <?php echo $bsDaysAweek; ?></span>
        </div>
    </div>
</div>